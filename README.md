# @eversoft/react-table

React table component build with Bootstrap and react-table

# Install

> `npm i @eversoft/react-table`

<br />

# Guideline

## For React

1. Add this code in your `public/index.html` file.

```html
...
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // Animate select box length
    var searchInput = $(".es-table .search-box input");
    var inputGroup = $(".es-table .search-box .input-group");
    var boxWidth = inputGroup.width();
    searchInput
      .focus(function () {
        inputGroup.animate({
          width: "300",
        });
      })
      .blur(function () {
        inputGroup.animate({
          width: boxWidth,
        });
      });
  });
</script>
...
```

2. Import css in `index.js`

```javascript
// index.js
import "@eversoft/react-table/lib/style.css"
```


## For next.js

1. Add this code in your `pages/_document.js` file.

```html
...
<Head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
</Head>
...
```

2. Install boostrap and import in `_app.js`
  
```bash
npm i bootstrap
```

```javascript
// _app.js
import 'bootstrap/dist/css/bootstrap.css'
import "@eversoft/react-table/lib/style.css"
```

## Use `ESTable`

```javascript
import { ESTable } from "@eversoft/react-table"
...
<ESTable
  data={[]}
  fields={[
    {
      name: "field name",
      key: "key",
      isSortable: true/false
    },
  ]}
  pageSize={{
    allPageSize: [5, 10, 20, 50],
    defaultPageSize: 5,
  }}
  onDeleteAction={() => {}}
  onEditAction={() => {}}
  title="Table <b>Details</b>"
  showPagination={true}
  showSearch={true}
  addButton={{
    title: "Add Button",
    onClick: () => {},
  }}
  loadingDuration={5000}
  className=""
/>
...
```

> Note: Search Animation Doesn't work in next.js 

# Screenshots

![Screenshot](https://user-images.githubusercontent.com/22606403/123514132-0a94a000-d6b1-11eb-8a3e-b09037aa70ea.JPG)
