const canvas = d3.select(".canva");

// var dataArray = [4, 15, 34, 123, 45, 23, 100];

var dataArray = 

// add an svg element
const svg = canvas.append("svg")
    .attr('width', "600")
    .attr('height', "600")

// const svg = canvas.select("svg");


// const rect = svg.append("rect")
const rect = svg.selectAll("rect");

d3.json('test.json')
    .then(data => {
        console.log(data.title);
        //code here to actually draw elements on the screen
})

rect.data(dataArray)
    .enter().append("rect")
    .attr("width", 24)
    .attr("height", function (d) {
        return d.height*2;
    })
    .attr("fill", function(d){return d.fill})
    
    .attr("x", function (d, i) {
        return i*25;
    })
    .attr("y", function (d, i) {
        return 100 - (d.height * 2);
    })


// svg.append("circle")
//     .attr("cx", '100')
//     .attr('cy', '100')
//     .attr("r", 50)
//     .attr('fill', "blue");



// svg.append("rect")
//     .attr("x", 150)
//     .attr("y", 50)
//     .attr("width", "100")
//     .attr("height", "100")
//     .attr('fill', 'green')
//     .attr("rx", 15)
//     .attr("ry", 15);

// svg.append("line")
//     .attr("x1", 129)
//     .attr("x2", 45)
//     .attr("y1", 100)
//     .attr("y2", 46)
//     .attr("stroke", "gray");

// svg.append("text")
//     .text("Hello ")
//     .attr("fill", "gray")
//     .attr("x", 10)
//     .attr("y", 30);

// svg.append("text")
//     .text(" There")
//     .attr("fill", "gray")
//     .attr("x", 10)
//     .attr("y", 50);

// svg.append("text")
//     .text("D3 ")
//     .attr("fill", "gray")
//     .attr("x", 10)
//     .attr("y", 70);