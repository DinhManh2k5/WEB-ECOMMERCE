export default function AuthLoadingCard() {
  return (
    <div
      className="w-full p-12 rounded-xl text-center flex flex-col items-center
                    relative overflow-hidden border border-white/15
                    backdrop-blur-xl bg-[rgba(19,18,27,0.4)]"
    >
      {/* Glow decorations */}
      <div
        className="absolute -top-24 -left-24 w-48 h-48
                      bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"
      />
      <div
        className="absolute -bottom-24 -right-24 w-48 h-48
                      bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Spinner */}
      <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full" />
        <div className="absolute inset-0 border-t-2 border-indigo-400 rounded-full animate-spin" />
        <div
          className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center
                        justify-center border border-indigo-500/30
                        shadow-[0_0_30px_rgba(79,70,229,0.3)]"
        >
          <span className="text-indigo-400 text-3xl">🔐</span>
        </div>
      </div>

      {/* Text */}
      <div className="space-y-4 relative z-10">
        <h1 className="text-xl font-semibold text-[#e4e1ee]">
          Authenticating with Google...
        </h1>
        <p className="text-[#c7c4d8] text-sm max-w-sm mx-auto opacity-80 leading-relaxed">
          Establishing a secure encrypted session with the identity provider.
          Please do not refresh this page.
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full mt-12 bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
        <div
          className="h-full w-3/4 rounded-full
                        bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600
                        shadow-[0_0_10px_#4f46e5]"
        />
      </div>
    </div>
  );
}
