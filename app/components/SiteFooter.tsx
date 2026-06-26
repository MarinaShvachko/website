import type { CSSProperties } from "react";

type SiteFooterProps = {
  style?: CSSProperties;
};

export default function SiteFooter({ style }: SiteFooterProps) {
  return (
    <footer className="footer" style={style}>
      <div className="copyright">
        <p className="footerText">
          © {new Date().getFullYear()} Marina Shvachko. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
