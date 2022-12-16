import React from "react";

const HeaderStyles = {
    width: "100%",
    background: "lightblue",
    height: "7vh",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    color: "#111",
    fontWeight: "600",
};
const FooterStyles = {
    width: "100%",
    height: "7vh",
    display: "flex",
    background: "lightblue",
    color: "#111",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
};
const layoutStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "86vh",
};

// 레이아웃 컴포넌트
function Layout({ children }) {
    return (
        <div>
            <Header />
            <main style={{ ...layoutStyles }}>
                {/* pages 들어오는 영역 */}
                {children}
            </main>
            <Footer />
        </div>
    );
}

// 헤더 컴포넌트
function Header() {
    return (
        <header style={{ ...HeaderStyles }}>
            <span>seunghyo's - Let's learn today</span>
        </header>
    );
}

// 푸터 컴포넌트
function Footer() {
    return (
        <footer style={{ ...FooterStyles }}>
            <span>copyright @LSH</span>
        </footer>
    );
}

export default Layout;