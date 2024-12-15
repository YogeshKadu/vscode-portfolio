function Instruction() {
  return <div className="min-h-full">
    <div className="w-full p-8 sm:p-20 xl:p-28">
      <div className="flex flex-col gap-3 text-xs text-secondary-500">
        <div className="w-full max-w-xs mx-auto aspect-square">
          {/* <img src="/images/vscode.svg" alt="vscode icon" className="w-full h-full fill-secondary-800 grayscale-[50%] brightness-90 drop-shadow-2xl" /> */}
          <svg xmlns="http://www.w3.org/2000/svg"  className="w-full h-full text-secondary-700" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M10.863 13.92a.805.805 0 0 1-.923-.159L4.816 9.063l-2.232 1.703a.54.54 0 0 1-.691-.031l-.716-.655a.547.547 0 0 1 0-.805L3.112 7.5L1.177 5.725a.547.547 0 0 1 0-.805l.716-.655a.54.54 0 0 1 .691-.03l2.232 1.702L9.94 1.24a.81.81 0 0 1 .923-.158l2.677 1.294c.281.136.46.422.46.736V8h-3.248V4.534L6.864 7.5l3.888 2.966V8H14v3.889c0 .314-.179.6-.46.736z"></path></svg>
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
