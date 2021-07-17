import React from "react";
class OutputCode extends React.Component {
    isHtmlSelect = true;
    isCssSelect = false;
    isJsSelect = false;
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }

        document.body.onkeyup = function () {
            var html = document.getElementById("html");
            var css = document.getElementById("css");
            var js = document.getElementById("js");
            var code = document.getElementById("code").contentWindow.document;
            code.open();
            code.writeln(html?.value + "<style>" + css?.value + "</style>" + "<script>" + js?.value + "</script>")
            code.close();
        }

    }
    
    openPnel(file) {
        if (file == "html")
            this.isHtmlSelect = !this.isHtmlSelect
        if (file == "css")
            this.isCssSelect = !this.isCssSelect
        if (file == "js")
            this.isJsSelect = !this.isJsSelect
        this.setState({
            load: !this.state.load
        })
    }


    render() {
        return <div className="output">

            <div className="sidebar ">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
                <h3 className="menu-item">File Explorer</h3>
                <button type="button" id="myHtml" name="Index.html" className={`${this.isHtmlSelect ? 'selected ' : ''} leftPanBtn`} onClick={() => this.openPnel("html")}>Index.html</button>
                <button type="button" id="myCss" name="Index.css" className={`${this.isCssSelect ? 'selected ' : ''}leftPanBtn`} onClick={() => this.openPnel("css")} >Index.css</button>
                <button type="button" id="myjs" name="Index.js" className={`${this.isJsSelect ? 'selected ' : ''}leftPanBtn`} onClick={() => this.openPnel("js")}>Index.js</button>

            </div>
            <div className=" right-pane">
                <header id="header">
                    <h1>Live Editor</h1>
                </header>
                <div className="containers">
                    <div id="coding_area">
                        {this.isHtmlSelect && <div><label className = "margin-left">HTML</label><textarea id="html" className="prism-live language-html language-markup">
                        </textarea></div>}
                        {this.isCssSelect && <div><label className = "margin-left">CSS</label><textarea id="css" className="prism-live language-css"></textarea></div>}
                        {this.isJsSelect && <div><label className = "margin-left">Java Script</label><textarea id="js" className="prism-live language-js"></textarea></div>}
                    </div>
                    <div id="code_output">
                        <iframe id="code"></iframe>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default OutputCode;