// javascript 

import data from './data';


function code() {

  let svg = d3.select("svg");
  let width = document.body.clientWidth; // get width in pixels
  let height = +svg.attr("height");
  let centerX = width * 0.5;
  let centerY = height * 0.5;
  let strength = 0.05;
  let focusedNode;

  // let format = d3.format(",d");

  // let scaleColor = d3.scaleOrdinal(d3.schemePastel1);
  let scaleColor = d3.scaleOrdinal(['#5FAAE3', '#BAEBFA', '#FEF3D8', '#F2B5AF', 
  '#939BCB', '#13436B', '#BEC7B4', '#BEE3C0', '#F3DBE0', '#CE9DD9']);


  // use pack to calculate radius of the circle
  let pack = d3
    .pack()
    .size([width, height])
    .padding(2);

  let forceCollide = d3.forceCollide(d => d.r + 1);

  // use the force
  let simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody())
    .force("collide", forceCollide)
    .force("x", d3.forceX(centerX).strength(strength))
    .force("y", d3.forceY(centerY).strength(strength));

  // reduce number of circles on mobile screen due to slow computation
  // if (
  //   "matchMedia" in window &&
  //   window.matchMedia("(max-device-width: 767px)").matches
  // ) {
  //   data = data.filter(el => {
  //     return el.value >= 50;
  //   });
  // }

  let root = d3.hierarchy({ children: data }).sum(d => d.value);

  // we use pack() to automatically calculate radius conveniently only
  // and get only the leaves
  let nodes = pack(root)
    .leaves()
    .map(node => {
      const data = node.data;
      return {
        x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
        y: centerY + (node.y - centerY) * 3,
        r: 0, // for tweening
        radius: node.r, //original radius
        id: data.cat,
        // + "." + data.name.replace(/\s/g, "-"),
        cat: data.cat,
        name: data.name,
        value: data.value,
        icon: data.icon,
        desc: data.desc,
        link: data.link,
        linkUrl: data.linkUrl
      };
    });
  simulation.nodes(nodes).on("tick", ticked);

  // svg.style("background-color", "white");
  let node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    // .attr("id", d => d.cat)
    .call(
      d3
        .drag()
        .on("start", d => {
          if (!d3.event.active) simulation.alphaTarget(0.2).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", d => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        })
        .on("end", d => {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
    );

  node
    .append("circle")
    .attr("r", 0)
    .style("fill", d => scaleColor(d.cat))
    .attr("id", d => d.cat)
    .style("opacity", 0.7)
    .transition()
    .duration(100)
    // .ease(d3.easeElasticOut)
    .tween("circleIn", d => {
      let i = d3.interpolateNumber(0, d.radius);
      return t => {
        d.r = i(t);
        simulation.force("collide", forceCollide);
      };
    });

  node
    .append("clipPath")
    .attr("id", d => `clip-${d.id}`)
    .append("use")
    .attr("xlink:href", d => `#${d.id}`);

  // display text as circle icon
  node
    .filter(d => !String(d.icon).includes("img/"))
    .append("text")
    .classed("node-icon", true)
    .attr("clip-path", d => `url(#clip-${d.id})`)
    .selectAll("tspan")
    .data(d => d.icon.split(";"))
    .enter()
    // .append("tspan")
    // .attr("x", 0)
    // .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
    // .text(name => name);

  // display image as circle icon
  node
    .filter(d => String(d.icon).includes("img/"))
    .append("image")
    .classed("node-icon", true)
    .attr("fill", d => `url(#clip-${d.id})`)
    .attr("xlink:href", d => d.icon)
    .attr("x", d => -d.radius * 0.7)
    .attr("y", d => -d.radius * 0.7)
    .attr("height", d => d.radius * 2 * 0.7)
    .attr("width", d => d.radius * 2 * 0.7);

  // node.append("title").text(d => d.cat + "::" + d.name + "\n" + format(d.value));


//------------------------------------------------------------------------------

// Legend 


  let legendOrdinal = d3
    .legendColor()
    .scale(scaleColor)
    .shape("circle");
    
  
  let legend = svg
    .append("g")
    .classed("legend-color", true)
    .attr("text-anchor", "start")
    .attr("transform", "translate(200, 250)")
    .style("font-size", "18px")
    .style("font-weight", "thin")
    .style("font-family", "Assistant, sans - serif")
    .style("fill", "white")
    .call(legendOrdinal)

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".legendCells > g").forEach((el, idx) => {
      el.setAttribute('id', el.textContent)
    });
  })



//------------------------------------------------------------------------------
// filter by city 


  document.addEventListener('DOMContentLoaded', () => {
    var clicked = false;
    document.querySelectorAll(".legendCells > g").forEach((el) => {
        el.onclick = function(){

          node.filter(function(d) {
            return d.id !== el.id 
          }).style("opacity", 0.1)

          node.filter(function (d) {
            return d.id === el.id
          }).style("opacity", 1)

          clicked = true;
        }

    });
            
    // if (clicked) {
    // svg.on("click", () => {
    //   node.style("opacity", 1)
    //   clicked = false;
    //   .log(clicked)
    //   })
    // }
  })
  
  
        
//------------------------------------------------------------------------------
  //small circle in the bubble


  let infoBox = node
    .append("foreignObject")
    .classed("circle-overlay hidden", true)
    .attr("x", -550 * 0.5 * 0.8)
    .attr("y", -125 * 0.5 * 0.8)
    .attr("height", 350 * 0.8)
    .attr("width", 550 * 0.8)
    .append("xhtml:div")
    .classed("circle-overlay__inner", true);
    
  infoBox
    .append("h2")
    .classed("circle-overlay__title", true)
    .text(d => d.name);

  infoBox
    .append("p")
    .classed("circle-overlay__body", true)
    .html(d => d.desc);


//display link in infobox
  infoBox
    .append("a")
    .classed("circle-overlay__link", true)
    .attr("target", "_blank")
    .html(d => d.link)
    .attr('href', d => d.linkUrl);


//------------------------------------------------------------------------------

// On click on nodes


  node.on("click", currentNode => {
    d3.event.stopPropagation();

    let currentTarget = d3.event.currentTarget; // the <g> el

    if (currentNode === focusedNode) {
      return;
    }
    let lastNode = focusedNode;
    focusedNode = currentNode;

    simulation.alphaTarget(0.2).restart();
    // hide all circle-overlay
    d3.selectAll(".circle-overlay").classed("hidden", true);
    d3.selectAll(".node-icon").classed("node-icon--faded", false).style("opacity", 1);
    node.style("opacity", 1);

    // don't fix last node to center anymore
    if (lastNode) {
      lastNode.fx = null;
      lastNode.fy = null;
      node
        .filter((d, i) => i === lastNode.index)
        .transition()
        .duration(1000)
        .ease(d3.easePolyOut)
        .tween("circleOut", () => {
          let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
          return t => {
            lastNode.r = irl(t);
          };
        })
        .on("interrupt", () => {
          lastNode.r = lastNode.radius;
        });
    }

    d3.transition()
      .duration(1000)
      .ease(d3.easePolyOut)
      .tween("moveIn", () => {
        let ix = d3.interpolateNumber(currentNode.x, centerX);
        let iy = d3.interpolateNumber(currentNode.y, centerY);
        let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
        return function(t) {
          currentNode.fx = ix(t);
          currentNode.fy = iy(t);
          currentNode.r = ir(t);
          simulation.force("collide", forceCollide);

        };
      })
      .on("end", () => {
        simulation.alphaTarget(0);
        let $currentGroup = d3.select(currentTarget);
        $currentGroup.select(".circle-overlay").classed("hidden", false);
        $currentGroup
          .select(".node-icon")
          .classed("node-icon--faded", true)
          .style("opacity", 0);
      })
      .on("interrupt", () => {
        currentNode.fx = null;
        currentNode.fy = null;
        simulation.alphaTarget(0);
      });
  });

  // blur
  d3.select(document).on("click", () => {
    let target = d3.event.target;

    

    if (!target.closest("#circle-overlay") && focusedNode) {
      focusedNode.fx = null;
      focusedNode.fy = null;
      simulation.alphaTarget(0.2).restart();
      d3.transition()
        .duration(1000)
        .ease(d3.easePolyOut)
        // .style("opacity", 1)
        .tween("moveOut", function() {
          let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
          return function(t) {
            focusedNode.r = ir(t);
            simulation.force("collide", forceCollide);
          };
        })
        .on("end", () => {
          focusedNode = null;
          simulation.alphaTarget(0);
        })
        .on("interrupt", () => {
          simulation.alphaTarget(0);
        });

      // hide all circle-overlay
      d3.selectAll(".circle-overlay").classed("hidden", true);
      d3.selectAll(".node-icon")
        .classed("node-icon--faded", false)
        .style("opacity", 1);
    }
  });

  function ticked() {
    node
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .select("circle")
      .attr("r", d => d.r);
  }

  // // modal function
  var modal = document.getElementById("myModal");

  // // Get the button that opens the modal
  var btn = document.getElementById("money-tree");

  // // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // }

  // // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  modal.style.display = "block";
  
}

// main.innerHTML = code();
module.export = code();