

[Youtube. Switch de dark-theme](https://www.youtube.com/watch?v=e2k0BlarVU0&t=43s)

[Youtube. Web milti idioma](https://www.youtube.com/watch?v=hBYVxQLtrqQ)

[Stackoverflow. addEventListener para checkbox](https://stackoverflow.com/questions/14544104/checkbox-check-event-listener)



## Evitar que se seleccione texto ó imágenes
Para lograr que un texto ó una imagen no se seleccionen utiliza la propiedad "user-select: none", así no podrán seleccionar ni texto ni imágenes. 

Aún así, puedes clickear en la imágen y jalarla. Para evitar eso utiliza background-image en vez de tener una imágen y resolveras el que no se seleccione ni el que la puedan jalar. 

```css
img {
    width: 80px;
    position: absolute;
    user-select: none;
}
```

[Youtube: Evitar seleccion](https://www.youtube.com/watch?v=dodQW5FaMXE&t=186s)


## innerText vs textContent
**innerText.** inyecta las etiquetas html que coloques en el texto

**textContent.** imprime las etiquetas html que coloques en el texto cómo texto y no como etiqueta.