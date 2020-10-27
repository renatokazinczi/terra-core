(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{2046:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n(0),l=n.n(a),o=n(343),r=n(853),c=n(884);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=function(){var e,t=s(Object(a.useState)([]),2),n=t[0],o=t[1],i=s(Object(a.useState)(!1),2),d=i[0],u=i[1],m=c.a.length,h=function(e,t){e.preventDefault();var a=r.a.toggleArrayValue(n,t.key),l=a.length===m;u(d?!l:l),o(l?[]:a)},p=function(e){if(n.length){var t=n.indexOf(e)>=0;return d?!t:t}return d},y="empty";return n.length?y="indeterminate":d&&(y="checked"),l.a.createElement(r.b,{summaryId:"check-table",summary:"This table has rows that can be batch selected with the checkbox or disclosed for further details.",numberOfColumns:4,cellPaddingStyle:"standard",rowStyle:"disclose",checkStyle:"toggle",dividerStyle:"horizontal",headerData:{selectAllColumn:{checkStatus:y,checkLabel:"Batch Selection",onCheckAction:function(){u(!!n.length||!d),o([])}},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=c.a,e.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),toggleAction:{metaData:{key:t.key},onToggle:h,toggleLabel:t.toggleText,isToggled:p(t.key)},discloseAction:{discloseLabel:t.discloseText,discloseCellIndex:t.primaryIndex}};var t,n})))}]})};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h={};function p(e){var t=e.components,n=m(e,["components"]);return Object(o.mdx)("wrapper",u({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table, {\n  Utils,\n} from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst CheckMarkTable = () => {\n  const [checkedKeys, setCheckedKeys] = useState([]);\n  const [allChecked, setAllChecked] = useState(false);\n  const rowCount = mockData.length; // This value needs to exclude or account for section headers\n\n  const handleRowCheckAction = (event, metaData) => {\n    event.preventDefault();\n\n    const newKeys = Utils.toggleArrayValue(checkedKeys, metaData.key);\n    const isMax = newKeys.length === rowCount;\n    setAllChecked(allChecked ? !isMax : isMax);\n    setCheckedKeys(isMax ? [] : newKeys);\n  };\n\n  const handleHeaderCheckAction = () => {\n    setAllChecked(!!checkedKeys.length || !allChecked);\n    setCheckedKeys([]);\n  };\n\n  const getIsRowChecked = (key) => {\n    if (checkedKeys.length) {\n      const isPresent = checkedKeys.indexOf(key) >= 0;\n      return allChecked ? !isPresent : isPresent;\n    }\n    return allChecked;\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowCheckAction,\n        toggleLabel: rowData.toggleText,\n        isToggled: getIsRowChecked(rowData.key),\n      },\n      discloseAction: {\n        discloseLabel: rowData.discloseText,\n        discloseCellIndex: rowData.primaryIndex,\n      },\n    }\n  );\n\n  const createRows = data => data.map(childItem => createRow(childItem));\n\n  let status = 'empty';\n  if (checkedKeys.length) {\n    status = 'indeterminate';\n  } else if (allChecked) {\n    status = 'checked';\n  }\n\n  return (\n    <Table\n      summaryId=\"check-table\"\n      summary=\"This table has rows that can be batch selected with the checkbox or disclosed for further details.\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      checkStyle=\"toggle\"\n      dividerStyle=\"horizontal\"\n      headerData={{\n        selectAllColumn: {\n          checkStatus: status,\n          checkLabel: 'Batch Selection',\n          onCheckAction: handleHeaderCheckAction,\n        },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n        ],\n      }}\n      bodyData={[{\n        rows: createRows(mockData),\n      }]}\n    />\n  );\n};\n\nexport default CheckMarkTable;\n\n")))}p.isMDXComponent=!0;var y=n(832),f=n.n(y),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(f.a,{title:t||"Check Mark Table",description:n,example:l.a.createElement(d,null),exampleSrc:l.a.createElement(p,null),isExpanded:a})};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var w={};function x(e){var t=e.components,n=b(e,["components"]);return Object(o.mdx)("wrapper",k({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-checkmark-table"},"Terra Table - Implementing a CheckMark Table"),Object(o.mdx)("p",null,"The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from HOC state. The following guide show you how to implement that state within a multiple row selection variant of table, as well as implement the additional narrowing requirements of a max selection for rows."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be using a unique key to manage the selection state, but the type of state used is open to the implementor of the HOC. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"selectedKeys")," will keep track of the keys that are active given the allSelected state. In the case where ",Object(o.mdx)("inlineCode",{parentName:"p"},"allSelected"),' is "false" the key values will be the keys that are selected, and in the case of "true" it will be the keys that are not selected. This dual behavior removes the need to copy all keys into state when the "select all" in checked.'),Object(o.mdx)("p",null," First defaulting our state to an empty array in the constructor. Then "),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+ const [checkedKeys, setCheckedKeys] = useState([]);\n+ const [allChecked, setAllChecked] = useState(false);\n")),Object(o.mdx)("p",null,"Next creating an event handler callback method to pass to the table row check mark cell's ",Object(o.mdx)("inlineCode",{parentName:"p"},"onCheckAction")," prop. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"onCheckAction")," will return the metaData prop passed it each check mark cell."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+  const handleRowCheckAction = (event, metaData) => {\n+\n+  }\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"  const handleRowCheckAction = (event, metaData) => {\n+   event.preventDefault();\n+   event.stopPropagation();\n  }\n")),Object(o.mdx)("p",null,"Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method ",Object(o.mdx)("inlineCode",{parentName:"p"},"toggleArrayValue"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state. Comparing the length of the array returned to the number of selectable rows within your table we can determine if all values are selected. If all values are selected we reset the keys, as there are no exceptions to check for."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"  const handleRowCheckAction = (event, metaData) => {\n    event.preventDefault();\n    event.stopPropagation();\n  \n+   const newKeys = Utils.toggleArrayValue(checkedKeys, metaData.key);\n+   const isMax = newKeys.length === rowCount;\n+   setAllChecked(allChecked ? !isMax : isMax);\n+   setCheckedKeys(isMax ? [] : newKeys);\n  }\n")),Object(o.mdx)("p",null,"Next in our implementation we'll want to add the ability to select all checkmark values. If keys are present there is an intermediate state. In the case of the intermediate state select all values. If ",Object(o.mdx)("inlineCode",{parentName:"p"},"allSelected")," is true then set to false. In either case we will be setting to all or nothing selected, so the intermediate values will be reset to an empty array."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+ const handleHeaderCheckAction = () => {\n+   setAllChecked(!!checkedKeys.length || !allChecked);\n+   setCheckedKeys([]);\n+ };\n")),Object(o.mdx)("p",null,"Before we create our method to populate our row with check mark state, we want to create a method to retrieve a selected value based upon a key and our dual state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+ const getIsRowChecked = (key) => {\n+   if (checkedKeys.length) {\n+     const isPresent = checkedKeys.indexOf(key) >= 0;\n+     return allChecked ? !isPresent : isPresent;\n+   }\n+   return allChecked;\n+ };\n")),Object(o.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our table rows with the updated isToggled props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.\n",Object(o.mdx)("a",k({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n")),Object(o.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onCheckAction" to our handler. The toggleLabel will relate to the row or check style set as "toggle".'),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n+     toggleAction: {\n+       metaData: { key: rowData.key },\n+       onToggle: handleRowCheckAction,\n+       toggleLabel: rowData.toggleText,\n+     },\n      cells: createCellsForRow(rowData.cells),\n    }\n  );\n")),Object(o.mdx)("p",null,"Now pass the key from the rowData to our ",Object(o.mdx)("inlineCode",{parentName:"p"},"getIsRowChecked")," method to set whether or not the row is toggled."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowCheckAction,\n        toggleLabel: rowData.toggleText,\n        isToggled: getIsRowChecked(rowData.key),\n      },\n      cells: createCellsForRow(rowData.cells),\n    }\n  );\n")),Object(o.mdx)("p",null,"We also are going to implement disclosure on our rows, so we will need to set the ",Object(o.mdx)("inlineCode",{parentName:"p"},"discloseLabel")," and the ",Object(o.mdx)("inlineCode",{parentName:"p"},"primaryCellIndex"),". The ",Object(o.mdx)("inlineCode",{parentName:"p"},"primaryCellIndex")," relates to the cell that will function as an accessible link element in our row."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowCheckAction,\n        toggleLabel: rowData.toggleText,\n        isToggled: getIsRowChecked(rowData.key),\n      },\n      cells: createCellsForRow(rowData.cells),\n+     discloseAction: {\n+       discloseLabel: rowData.discloseText,\n+       discloseCellIndex: rowData.primaryIndex,\n+     },\n    }\n  );\n")),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+  const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+  const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(o.mdx)("p",null,"Next can implement a method to loop through our data and create the table with our methods and call it from our render method."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+  const createRows = data => data.map(childItem => createRow(childItem));\n\n  return (\n+   <Table\n+     summaryId=\"check-table\"\n+     summary=\"This table has rows that can be batch selected with the checkbox or disclosed for further details.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     rowStyle=\"disclose\"\n+     checkStyle=\"toggle\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n  );\n")),Object(o.mdx)("p",null,"Finally we need to add an entry to the header for the check mark cell. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"checkStatus")," prop will be in either the case of ",Object(o.mdx)("inlineCode",{parentName:"p"},"allChecked")," or in the presence of ",Object(o.mdx)("inlineCode",{parentName:"p"},"checkedKeys")," the ",Object(o.mdx)("inlineCode",{parentName:"p"},"indeterminate")," value will be sent.."),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-diff"}),"+ let status = 'empty';\n+ if (checkedKeys.length) {\n+   status = 'indeterminate';\n+ } else if (allChecked) {\n+   status = 'checked';\n+ }\n\n  return (\n    <Table\n      summaryId=\"check-table\"\n      summary=\"This table has rows that can be batch selected with the checkbox or disclosed for further details.\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      checkStyle=\"toggle\"\n      headerData={{\n+       selectAllColumn: {\n+         checkStatus: status,\n+         checkLabel: 'Batch Selection',\n+         onCheckAction: handleHeaderCheckAction,\n+       },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n        ],\n      }}\n      bodyData={[{\n        rows: createRows(mockData),\n      }]}\n    />\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(g,{mdxType:"CheckMarkTable"}))}x.isMDXComponent=!0},832:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=m(n(1)),r=m(n(4)),c=n(97),s=m(n(836)),i=m(n(159)),d=n(10),u=m(n(837));function m(e){return e&&e.__esModule?e:{default:e}}function h(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var f=r.default.bind(u.default),g={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},k=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,r=e.description,u=e.isExpanded,m=p((0,l.useState)(u),2),h=m[0],y=m[1],g=p((0,l.useState)(!1),2),w=g[0],x=g[1],v=l.default.useContext(c.ThemeContext),C=void 0!==a,O=function(){x(!w),h&&y(!h)},j=function(){y(!h),w&&x(!w)},_=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:f("template",v.className)},l.default.createElement("div",{className:f("header")},o&&l.default.createElement("h2",{className:f("title")},o)),l.default.createElement("div",{className:f("content")},r&&l.default.createElement("div",{className:f("description")},r),t),l.default.createElement("div",{className:f("footer")},n?l.default.createElement("div",{className:f("button-container")},C&&l.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":w}),onClick:O,onKeyDown:function(e){return _(e,O)},onBlur:k,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:f("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(i.default,{className:f("chevron")})),l.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return _(e,j)},onBlur:k,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:f("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(i.default,{className:f("chevron")}))):null,l.default.createElement("div",null,w&&l.default.createElement("div",{className:f("css")},a),h&&l.default.createElement("div",{className:f("code")},n))))};w.propTypes=g,w.defaultProps={isExpanded:!1};var x=w;t.default=x},836:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(12);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=r({},e);return l.a.createElement(o.a,t,l.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=c},837:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},884:function(e,t,n){"use strict";t.a=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}]}}]);