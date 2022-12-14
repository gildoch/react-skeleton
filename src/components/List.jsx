var React = require("react");
var ListItem = require("./ListItem.jsx");

var ingredients = [
  { id: 1, text: "ham" },
  { id: 1, text: "cheese" },
  { id: 1, text: "potatoes" },
];

var List = React.createClass({
  render: function () {
    var listItems = ingredients.map(function (item) {
      return <ListItem key={item.key} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  },
});

module.exports = List;
