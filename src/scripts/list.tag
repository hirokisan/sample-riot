<list>
<h2>{ opts.heading }</h2>
<ul>
<li each={ item, i in items }>{ item }</li>
</ul>
<script>
const PI = 3.1415;
this.items = ['One', 'Two', PI, 'Three'];
</script>
</list>
