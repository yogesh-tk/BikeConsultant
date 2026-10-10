import { Bike, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SignIn } from "@clerk/react";

function Login() {
  return <main className="login-page"><div className="login-shell">
    <div className="login-brand"><span className="brand-mark"><Bike size={22} /></span><strong>motora<span className="dot">.</span></strong></div>
    <div className="login-card">
      <div className="login-head"><p className="eyebrow">WELCOME BACK</p><h1>Sign in to Motora</h1><p>Discover your next ride and manage your bike listings.</p></div>
      <div className="clerk-signin-wrap"><SignIn routing="path" path="/login" signUpUrl="/sign-up" fallbackRedirectUrl="/" appearance={{ elements: { rootBox: "clerk-root-box", card: "clerk-card", formButtonPrimary: "clerk-primary-button", socialButtonsBlockButton: "clerk-social-button", footer: "clerk-hidden" } }} /></div>
      <div className="login-security"><ShieldCheck size={17} /><span>Secure authentication powered by Clerk</span></div>
    </div>
    <Link className="back-home" to="/">← Back to home</Link>
  </div></main>;
}
export default Login;
