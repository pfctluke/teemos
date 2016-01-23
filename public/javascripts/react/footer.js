React.render(
    React.createElement("footer", {className: "page-footer teal"}, 
        React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col l9 s12"}, 
                    React.createElement("h5", {className: "white-text"}, "团队简介"), 
                    React.createElement("p", {className: "grey-text text-lighten-4"}, "这是一个神秘的组织，欢迎加入。")
                ), 
                React.createElement("div", {className: "col l3 s12"}, 
                    React.createElement("h5", {className: "white-text"}, "Email"), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement("a", {className: "white-text", href: "mailto:luke.sun@teemos.cn"}, "luke.sun@teemos.cn")
                        )
                    )
                )
            )
        ), 
        React.createElement("div", {className: "footer-copyright"}, 
            React.createElement("div", {className: "container"}, 
            "Made by", 
                React.createElement("a", {className: "brown-text text-lighten-3", href: "/"}, " Luke")
            )
        )
    ),

    document.getElementById('app-footer')
);

