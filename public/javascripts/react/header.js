React.render(
    React.createElement("nav", {className: "white", role: "navigation"}, 
        React.createElement("div", {className: "nav-wrapper container"}, 
            React.createElement("a", {id: "logo-container", href: "/", className: "brand-logo"}, 
                "Teemos", 
                React.createElement("img", {src: "/images/icon.png"})
            ), 
            React.createElement("div", {className: "right-nav hide-on-med-and-down"}, 
                React.createElement("a", {href: "", className: "waves-effect waves-light btn-flat login"}, "登录"), 
                React.createElement("a", {href: "/sign_up", className: "orange waves-effect waves-light btn"}, "注册")
            ), 
            React.createElement("ul", {className: "right hide-on-med-and-down"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "首页")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "照片")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "关于"))
            ), 

            React.createElement("ul", {id: "nav-mobile", className: "side-nav"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Navbar Link"))
            ), 
            React.createElement("a", {href: "#", "data-activates": "nav-mobile", className: "button-collapse"}, React.createElement("i", {className: "material-icons"}, "menu"))
        )
    ),
    document.getElementById('app-header')
);

