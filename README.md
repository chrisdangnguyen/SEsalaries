# README

# MoneyTree

[MoneyTree Live](https://chrisdangnguyen.github.io/moneytree/)

![home_page](home_page.png)

![home](home.gif)

## Background

MoneyTree is an appealing data visualization website that inform users of average software engineer salaries for multiple levels across popular metropolitan cities in the United States. User will have the experience to easily access and retrieve information through a click of a few buttons. 

## Technologies

* Javascript 
* HTML 
* CSS
* D3.js

## Features

* Users can interact with the bubbles by dragging it around
* Bubbles can be moved around and will always link back to the center and other bubbles
* Bubbles are categorized by colors to specific cities
* Bubbles range in sizes depending on the career level of Software Engineers
* Bubbles will enlarge to display information of the position and users can navigate to a direct salary link to learn more

![drag](drag.gif)

```javascript
let simulation = d3
  .forceSimulation()
  .force("charge", d3.forceManyBody())
  .force("collide", forceCollide)
  .force("x", d3.forceX(centerX).strength(strength))
  .force("y", d3.forceY(centerY).strength(strength));

let root = d3.hierarchy({ children: data }).sum(d => d.value);

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

let node = svg
  .selectAll(".node")
  .data(nodes)
  .enter()
  .append("g")
  .attr("class", "node")
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
```

![filter](filter.gif)

![bubble](bubble.gif)

## Future Development
* Implement an API of Software Engineer salaries for accurate data
