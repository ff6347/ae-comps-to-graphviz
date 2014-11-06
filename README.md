ae comps to graphviz
====================

Export flow of current comp to [graphviz](http://graphviz.org/)  

![](comp.png)  
Image created with [Omnigraffle](http://www.omnigroup.com/omnigraffle/)  

    digraph {
        "Comp 1" -> "Comp 2";
        "Comp 2" -> "Black Solid 3 Comp 1";
        "Black Solid 3 Comp 1" -> "Black Solid 3";
        "Comp 2" -> "Black Solid 2";
        "Comp 2" -> "Black Solid 1";
        "Comp 2" -> "Comp 3";
        "Comp 3" -> "Null 1";
        "Comp 1" -> "Black Solid 3 Comp 1";
        "Comp 1" -> "Comp 3";
    }

install graphviz with homebrew

    brew install graphviz  

export image:  

      dot -Tpng comp.dot -o raw-comp.png; open raw-comp.png

![](raw-graphviz-output.png)  


##Todo:  

- fix recursion (not working correctly, double entries in array)
- add label if comp, layer, camera, light, text or or or
- exclude layer option
- ...

Copyright 2014 Fabian "fabiantheblind" Morón Zirfas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  


