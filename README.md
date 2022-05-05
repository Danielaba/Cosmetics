<h1>E-Commerce de cosmeticos</h1>

<div>
    <img src='./src/assets/img/productos.png'></img>
</div>

<h2>Resumen</h2>

<p>
    El e-commerce cuenta con una vista de los productos que contiene, al dar click en "Ver Detalle" se dirige a los detalles del producto y se direcciona segun el id del mismo.
</p>

<div>
    <img src='./src/assets/img/detalle-producto.png'></img>
</div>

<p>
    Cuenta con un nav horizontal donde se puede navegar las diferentes vistas del sitio web, sin embargo en este momento el unico que esta direccionado es la opcion "Productos".
</p>

<h2>Detalles</h2>
<ul>
<li>Menu de opciones</li>
<p>
    Cuenta con el nombre del sitio web, las opciones y un icono de carrito de compras, en cuanto a los estilos se realizaron por medio de CSS.
</p>

<li>Productos</li>
<p>
    En la pestaña de productos, se encuentran tres tarjetas donde cada una de ellas contiene los productos, tienen un titulo donde se encuentra el nombre del producto seguido de una imagen, el precio y finalmente un boton de ver mas detalles, los estilos se relizaron por medio de CSS.

    Se realizo una promesa con un arreglo "productos" que posee tres objetos con las keys y los values que corresponden dependiendo del producto y se llamaron hacia la tarjeta, tambien se uso un hook de efecto para que funcione como filtro.
</p>

<li>Detalles del Producto</li>
<p>
    Al ver los detalles del producto se obseva la imagen de este y al lado la informacion correspondiente, los estilos que posee se realizaron mediante CSS, para direccionar a cada uno se hizo por medio de el id utilizando useParams de react-router-dom y se filtra por parametro.

    Se arelizo un botón contador para agregar el producto, este debe incrementar según el stock en este caso el stock pata todos los productos es 5 y tambien debe decrementar hasta 0.
</p>
</ul>

<h2>Direccionamiento de rutas</h2>

<ul>
<li>/</li>
<p>
    Direcciona a ItemListContainer, alli es donde se encuentran los productos que contiene el e-commerce.
</p>

<li>/categoria/:id</li>
<p>
    Direcciona a ItemListContainer, alli es donde se encuentran los productos que contiene el e-commerce.
</p>

<li>/item/:id</li>
<p>
    Direcciona a ItemDetailContainer, alli es donde se encuentran los detalles de los productos que contiene el e-commerce.
</p>

</ul>