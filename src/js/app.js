var app = new Vue({
    el: '#app',
    data: {
        header:{
            logo: './src/img/logo1.png',
            titulo: 'Pizza Vue',
            sesion: "Iniciar Sesión"
        },
        menu: ['Inicio','Menú','Sucursales','Acerca de nosotros'],
        img:{
            banner: './src/img/banner.jpg',
            img1: './src/img/img1.jpg',
            img2: './src/img/img2.jpg'
        },
        practica: {
            text1: '¡Puedes visitar nuestras instalaciones!',
            text2: '¡Promoción del mes!'
        },
        articulos:{
            art1:{
                img: './src/img/art1.jfif',
                nombre: 'Fragola',
                ingredientes: 'Fresa, kiwi, mezcla de quesos, jitomate, albahaca y cebolla con aderezo de mostaza miel.',
                precio: '$65.00'
            },
            art2:{
                img: './src/img/art2.jpg',
                nombre: 'Serrana',
                ingredientes: 'Jamón serrano, queso de cabra con mango, uvas, duraznos, nuez caramelizada y toronja con vinagreta de tamarindo.',
                precio: '$75.00'
            },
            art3:{
                img: './src/img/art3.jfif',
                nombre: 'Campestre',
                ingredientes: 'Pasta tornillo, jitomate, aceituna, albahaca, jamón, queso manchego, orégano, aderezo de mostaza y miel.',
                precio: '$55.00'
            },
            art4:{
                img: './src/img/art4.jfif',
                nombre: 'Pollo',
                ingredientes: 'Acompañadas de chimichurri.',
                precio: '$25.00'
            },
            art5:{
                img: './src/img/art5.jpg',
                nombre: 'Jamón y Queso',
                ingredientes: 'Acompañadas de chimichurri.',
                precio: '$25.00'
            },
            art6:{
                img: './src/img/art6.jfif',
                nombre: 'Carne Molida',
                ingredientes: 'Acompañadas de chimichurri.',
                precio: '$25.00'
            }
        },
        footer: '2019 © Copyright - Pizza Vue | Todos los derechos reservados.'
    }
})