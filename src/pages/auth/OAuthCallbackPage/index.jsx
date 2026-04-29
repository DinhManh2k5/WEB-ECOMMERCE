import AuthLoadingCard from "./AuthLoadingCard";
import "../auth.css";
import "./oauthCallbackPage.css";

export default function OAuthCallbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#13121b] text-[#e4e1ee]">
      {/* Main */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <section className="max-w-xl w-full flex flex-col items-center">
          <AuthLoadingCard />
        </section>
      </main>
    </div>
  );
}
