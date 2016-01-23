React.render(
    <footer className="page-footer teal">
        <div className="container">
            <div className="row">
                <div className="col l9 s12">
                    <h5 className="white-text">团队简介</h5>
                    <p className="grey-text text-lighten-4">这是一个神秘的组织，欢迎加入。</p>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">Email</h5>
                    <ul>
                        <li>
                            <a className="white-text" href="mailto:luke.sun@teemos.cn">luke.sun@teemos.cn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
            Made by
                <a className="brown-text text-lighten-3" href="/"> Luke</a>
            </div>
        </div>
    </footer>,

    document.getElementById('app-footer')
);

