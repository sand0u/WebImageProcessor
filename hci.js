/**
 * Created by zhoujh on 2016/1/2.
 */

function HCI() {

    var file = document.getElementById("file");
    var openBtn = document.getElementById("openBtn");

    addHandler(openBtn, "click", function() {
        file.click();
    }, false);

    file.onchange = function() {
        getFilePath(G.img, this, null);
        G.img.onload = function() {
            imread(G.img);
        };
    };

}