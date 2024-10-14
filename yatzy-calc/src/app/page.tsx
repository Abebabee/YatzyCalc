export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-900">
      <main>
        <div className="bg-slate-700 text-white p-4 rounded-md shadow-md">
          <div className="flex flex-col justify-center">
            <div>Snap a photo of your Yatzy scorecard</div>
            <div className="flex flex-row justify-center mt-2">
              <button className="bg-green-500 text-black font-bold p-2 rounded-md hover:bg-green-600 mr-4">
                Upload photo
              </button>
              <button className="bg-green-500 text-black font-bold p-2 rounded-md hover:bg-green-600">
                Snap photo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
