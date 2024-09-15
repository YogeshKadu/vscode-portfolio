function Instruction() {
  return <div className="min-h-full">
    <div className="w-full p-8 sm:p-20 xl:p-28">
      <div className="flex flex-col gap-3 text-xs text-secondary-500">
        <div className="w-full max-w-xs mx-auto aspect-square">
          <img src="/images/vscode.svg" alt="vscode icon" className="w-full h-full fill-secondary-800 grayscale-[50%] brightness-90 drop-shadow-2xl" />
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <div>Go to file</div>
          <div><span className="kbd">Ctrl</span> + <span className="kbd">p</span></div>
        </div>
        <div className="flex justify-center gap-3">
          <div>Go to file</div>
          <div><span className="kbd">Ctrl</span> + <span className="kbd">p</span></div>
        </div>
        <div className="flex justify-center gap-3">
          <div>Go to file</div>
          <div><span className="kbd">Ctrl</span> + <span className="kbd">p</span></div>
        </div>
      </div>
    </div>
  </div>;
}

export default Instruction;
