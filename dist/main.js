/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/se_salaries/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

let data = [
  {
    cat: "Boston",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/boston.png",
    desc: "$77,323"
  },
  {
    cat: "Boston",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/boston.png",
    desc: "$99,232"
  },
  {
    cat: "Boston",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/boston.png",
    desc: "$123,101"
  },
  {
    cat: "Boston",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/boston.png",
    desc: "$148,160"
  },
  // {
  //   cat: "Boston",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/boston.png",
  //   desc: "$168,223"
  // },
  {
    cat: "Chicago",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/chicago.png",
    desc: "$72,617"
  },
  {
    cat: "Chicago",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/chicago.png",
    desc: "$93,192"
  },
  {
    cat: "Chicago",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/chicago.png",
    desc: "$115,608"
  },
  {
    cat: "Chicago",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/chicago.png",
    desc: "$139,142"
  },
  // {
  //   cat: "Chicago",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/chicago.png",
  //   desc: "$157,984"
  // },
  {
    cat: "Dallas",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/dallas.png",
    desc: "$67,845"
  },
  {
    cat: "Dallas",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/dallas.png",
    desc: "$87,068"
  },
  {
    cat: "Dallas",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/dallas.png",
    desc: "$108,012"
  },
  {
    cat: "Dallas",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/dallas.png",
    desc: "$129,999"
  },
  // {
  //   cat: "Dallas",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/dallas.png",
  //   desc: "$147,603"
  // },
  {
    cat: "Los Angeles",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/los_angeles.png",
    desc: "$77,117"
  },
  {
    cat: "Los Angeles",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/los_angeles.png",
    desc: "$98,968"
  },
  {
    cat: "Los Angeles",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/los_angeles.png",
    desc: "$112,773"
  },
  {
    cat: "Los Angeles",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/los_angeles.png",
    desc: "$147,766"
  },
  // {
  //   cat: "Los Angeles",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/los_angeles.png",
  //   desc: "$167,776"
  // },
  {
    cat: "Miami",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/miami.png",
    desc: "$66,691"
  },
  {
    cat: "Miami",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/miami.png",
    desc: "$85,587"
  },
  {
    cat: "Miami",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/miami.png",
    desc: "$106,174"
  },
  {
    cat: "Miami",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/miami.png",
    desc: "$127,787"
  },
  // {
  //   cat: "Miami",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/miami.png",
  //   desc: "$145,091"
  // },
  {
    cat: "New York",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/new_york.png",
    desc: "$82,892"
  },
  {
    cat: "New York",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/new_york.png",
    desc: "$106,379"
  },
  {
    cat: "New York",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/new_york.png",
    desc: "$131,967"
  },
  {
    cat: "New York",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/new_york.png",
    desc: "$158,832"
  },
  // {
  //   cat: "New York",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/new_york.png",
  //   desc: "$180,340"
  // },
  {
    cat: "Philadelphia",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/philadelphia.png",
    desc: "$73,580"
  },
  {
    cat: "Philadelphia",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/philadelphia.png",
    desc: "$94,440"
  },
  {
    cat: "Philadelphia",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/philadelphia.png",
    desc: "$117,157"
  },
  {
    cat: "Philadelphia",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/philadelphia.png",
    desc: "$141,006"
  },
  // {
  //   cat: "Philadelphia",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/philadelphia.png",
  //   desc: "$160,100"
  // },
  {
    cat: "San Diego",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/san_diego.png",
    desc: "$73,656"
  },
  {
    cat: "San Diego",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/san_diego.png",
    desc: "$95,535"
  },
  {
    cat: "San Diego",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/san_diego.png",
    desc: "$117,262"
  },
  {
    cat: "San Diego",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/san_diego.png",
    desc: "$141,133"
  },
  // {
  //   cat: "San Diego",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/san_diego.png",
  //   desc: "$160,244"
  // },
  {
    cat: "San Francisco",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/san_francisco.png",
    desc: "$85,838"
  },
  {
    cat: "San Francisco",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/san_francisco.png",
    desc: "$110,160"
  },
  {
    cat: "San Francisco",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/san_francisco.png",
    desc: "$136,657"
  },
  {
    cat: "San Francisco",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/san_francisco.png",
    desc: "$164,476"
  },
  // {
  //   cat: "San Francisco",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/san_francisco.png",
  //   desc: "$186,748"
  // },
  {
    cat: "Seattle",
    name: "Software Engineer 1",
    value: 35,
    icon: "./img/seattle.png",
    desc: "$74,946"
  },
  {
    cat: "Seattle",
    name: "Software Engineer 2",
    value: 75,
    icon: "./img/seattle.png",
    desc: "$96,181"
  },
  {
    cat: "Seattle",
    name: "Software Engineer 3",
    value: 175,
    icon: "./img/seattle.png",
    desc: "$119,316"
  },
  {
    cat: "Seattle",
    name: "Software Engineer 4",
    value: 275,
    icon: "./img/seattle.png",
    desc: "$143,605"
  }
  // {
  //   cat: "Seattle",
  //   name: "Software Engineer 5",
  //   value: 9,
  //   icon: "./img/seattle.png",
  //   desc: "$163,051"
  // }
];

module.exports = data; 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_0__);
// javascript 




function code() {

  let svg = d3.select("svg");
  let width = document.body.clientWidth; // get width in pixels
  let height = +svg.attr("height");
  let centerX = width * 0.55;
  let centerY = height * 0.5;
  // let strength = 0.1;
  let focusedNode;

  // let format = d3.format(",d");

  let scaleColor = d3.scaleOrdinal(d3.schemeSet3);

  // use pack to calculate radius of the circle
  let pack = d3
    .pack()
    .size([width, height])
    .padding(2);

  let forceCollide = d3.forceCollide(d => d.r);

  // use the force
  let simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody())
    .force("collide", forceCollide)
    .force("x", d3.forceX(centerX)) //.strength(strength))
    .force("y", d3.forceY(centerY)); //.strength(strength));

  // reduce number of circles on mobile screen due to slow computation
  // if (
  //   "matchMedia" in window &&
  //   window.matchMedia("(max-device-width: 767px)").matches
  // ) {
  //   data = data.filter(el => {
  //     return el.value >= 50;
  //   });
  // }

  let root = d3.hierarchy({ children: _data__WEBPACK_IMPORTED_MODULE_0___default.a }).sum(d => d.value);

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
        desc: data.desc
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
    .style("opacity", 1)
    .transition()
    .duration(3000)
    .ease(d3.easeElasticOut)
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
    .attr("transform", "translate( 100, 200 )")
    .style("font-size", "18px")
    .style("font-weight", "thin")
    .style("font-family", "Kalam")
    .style("fill", "rgb(167, 130, 82)")
    .call(legendOrdinal)

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".legendCells > g").forEach((el, idx) => {
      el.setAttribute('id', el.textContent)
    });
  })


  document.addEventListener('DOMContentLoaded', () => {
    var clicked = false;
    console.log(clicked)
    document.querySelectorAll(".legendCells > g").forEach((el) => {
        el.onclick = function(){

          node.filter(function(d) {
            return d.id !== el.id 
          }).style("opacity", 0.1)

          node.filter(function (d) {
            return d.id === el.id
          }).style("opacity", 1)

          clicked = true;
          console.log(clicked)
        }

    });
            
    // if (clicked) {
    // svg.on("click", () => {
    //   node.style("opacity", 1)
    //   clicked = false;
    //   console.log(clicked)
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

    simulation.alphaTarget(1).restart();
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
        .style("opacity", 1)
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
        console.log("tweenMoveIn", currentNode);
        let ix = d3.interpolateNumber(currentNode.x, centerX);
        let iy = d3.interpolateNumber(currentNode.y, centerY);
        let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
        return function(t) {
          // console.log('i', ix(t), iy(t));
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
      // .on("interrupt", () => {
      //   console.log("move interrupt", currentNode);
      //   currentNode.fx = null;
      //   currentNode.fy = null;
      //   simulation.alphaTarget(0);
      // });
  });

  // blur
  d3.select(document).on("click", () => {
    let target = d3.event.target;


    if (!target.closest("#circle-overlay") && focusedNode) {
      focusedNode.fx = null;
      focusedNode.fy = null;
      simulation.alphaTarget(0.2).restart();
      d3.transition()
        .duration(2000)
        .ease(d3.easePolyOut)
        // .style("opacity", 1)
        .tween("moveOut", function() {
          console.log("tweenMoveOut", focusedNode);
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
        // .on("interrupt", () => {
        //   simulation.alphaTarget(0);
        // });

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



  //------------------------------------------------------------------------------
  // for glow effect on nodes

    //Container for the gradients
  // var defs = svg.append("defs");

  // // //Filter for the outside glow
  // var filter = defs.append("filter")
  //     .attr("id","glow");
  // filter.append("feGaussianBlur")
  //     .attr("stdDeviation","3.5")
  //     .attr("result","coloredBlur");
  // var feMerge = filter.append("feMerge");
  // feMerge.append("feMergeNode")
  //     .attr("in","coloredBlur");
  // feMerge.append("feMergeNode")
  //     .attr("in","SourceGraphic");

  // d3.selectAll(".node").style("filter", "url(#glow)");
  
}

// main.innerHTML = code();
module.exports = code();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map