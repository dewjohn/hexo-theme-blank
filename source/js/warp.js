$("img").not('.page img').not('.nav-logo img').each(function () {
     var element = document.createElement("a");
     $(element).attr("data-fancybox", "gallery");
     $(element).attr("href", $(this).attr("src"));
     $(this).wrap(element);
 });