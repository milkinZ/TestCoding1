import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState(0);
  const [bil, setBil] = useState([])
  const [bil3, setBil3] = useState([])
  const [bil2, setBil2] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function coba() {
    let bil = []
    if (inputValue < 1 || inputValue > 10000) {
      alert("Masukkan angka 1 - 10000")
      document.getElementById("kembali").scrollIntoView({ behavior: 'smooth' })

    } else {
      for (let i = 1; i <= inputValue; i++) {
        bil.push(Math.floor(Math.random() * (1000000 - -1000000)) + -1000000)
        // bil.push(Math.floor(Math.random() * (10 - -10)) + -10)
      }
    }
    setBil(bil)
  }

  function coba2() {
    let bil2 = []
    if (bil3.length === 0) {
      alert("Simpan bilangan pada Tab Kedua")
    } else {
      bil.map(i => {
        if (Math.sign(i) === Math.sign(1)) {
          bil2.push(i)
        }
      })
      // for (let i = 0; i < bil.length; i++) {
      //    if(Math.sign(bil[i]) === Math.sign(1)){
      //      bil2.push(bil[i]);
      //    }
      // }
      setBil2(Math.floor(Math.random() * (Math.min(...bil2) - 1)) + 1)
      document.getElementById("myButton3").disabled = true;
    }
  }

  const next = () => {
    if (bil.length === 0) {
      alert("Deretan bilangan masih kosong")
    } else {
      setBil3(bil)
      document.getElementById("myButton").disabled = true;
      document.getElementById("myButton2").disabled = true;
      document.getElementById("hasil").scrollIntoView({ behavior: 'smooth' })
    }
  }

  const simpan = () => {
    if (inputValue < 1 || inputValue > 10000) {
      alert("Masukkan angka 1 - 10000")
    } else {
      setIsDisabled(true)
      document.getElementById("generate").scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-screen h-screen overflow-y-scroll divide-y-2 divide-dashed divide-gray-400">
      <header className="bg-gray-700 w-full p-4 flex justify-center">
        <h2 className="ml-2 text-xl font-semibold font-serif text-gray-200">Ardha Nur Fajri</h2>
      </header>
      {/* Tab Pertama */}
      <div className="bg-gray-800 h-full flex justify-center items-center" id="kembali">
        <div className="bg-gray-700 w-4/5 h-4/5 rounded p-6 flex flex-col">
          <div className="border-t border-r border-l rounded-t flex justify-center items-center">
            <h2 className=" text-center text-lg font-semibold font-serif text-gray-200">Tab Pertama</h2>
          </div>
          <div className="bg-gray-600 w-full h-full rounded-b px-6 flex-col flex border justify-center items-center space-y-2">
            <label classname="block text-md font-normal leading-8 text-gray-100">Masukkan jumlah deretan bilangan</label>

            <div className="relative rounded-md shadow-lg shadow-gray-800 w-full">
              <input
                disabled={isDisabled}
                onChange={handleChange}
                type=""
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-100 ring-1 ring-inset bg-gray-700 ring-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Masukkan angka 1 - 10000"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  disabled={isDisabled}
                  onClick={simpan}
                  className="h-full flex justify-center items-center rounded-r-md ring-1 ring-inset ring-gray-900 pl-4 pr-4 text-gray-300 bg-gray-900 hover:text-white hover:bg-blue-800  sm:text-sm"
                >
                  Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Kedua */}
      <div className="bg-gray-800 h-full flex justify-center items-center" id="generate">
        <div className="bg-gray-700 w-4/5 h-4/5 rounded pt-8 px-6 pb-10 flex flex-col">
          <div className="border-t border-r border-l rounded-t flex justify-center items-center">
            <h2 className=" text-center text-lg font-semibold font-serif text-gray-200">Tab Kedua</h2>
          </div>
          <div className="bg-gray-600 w-full h-full rounded-b px-6 border flex-col flex items-end py-2 space-y-2">
            <div className="flex-col flex justify-start items-center w-full h-full space-y-2">
              <label classname="block text-md font-normal text-gray-50">Klik tombol untuk mengacak bilangan</label>
              <label className="block text-xs font-normal text-gray-300">Klik tombol hingga menemukan daftar bilangan yang diingkan</label>
              <button
                id="myButton"
                onClick={coba}
                className="rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-center text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm"
              >
                Generate
              </button>
              <div className="border w-full max-h-64 rounded p-4 text-center text-gray-100 overflow-auto">
                <p className="text-normal font-mono">{bil.join(', ')}</p>
              </div>
            </div>
            <div>
              <button
                id="myButton2"
                onClick={next}
                className="rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-right text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Ketiga */}
      <div className="bg-gray-800 h-full flex justify-center items-center" id="hasil">
        <div className="bg-gray-700 w-4/5 h-4/5 rounded pt-8 px-6 pb-10 flex flex-col">
          <div className="border-t border-r border-l rounded-t flex justify-center items-center">
            <h2 className=" text-center text-lg font-semibold font-serif text-gray-200">Tab Ketiga</h2>
          </div>
          <div className="bg-gray-600 w-full h-full rounded-b px-6 flex-col flex border items-center py-3 space-y-2">
            <label classname="block text-md font-normal leading-8 text-gray-100">Deretan bilangan</label>
            <div className="border w-full max-h-64 rounded p-4 text-center text-gray-100 overflow-auto">
              <p className="text-normal font-mono">{bil3.join(', ')}</p>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <label classname="block text-md font-normal text-gray-50">Klik tombol di bawah</label>
              <label className="block text-xs font-normal text-gray-300">Untuk menampilkan bilangan bulat positif terkecil yang tidak ada di deretan bilangan</label>
            </div>
            <div>
              <button
                id="myButton3"
                onClick={coba2}
                className="rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-right text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm"
              >
                Tampilkan
              </button>
            </div>
            <div className="border w-full max-h-64 rounded p-2 text-center text-gray-100">
              <p className="text-normal font-mono">{bil2}</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-700 w-full p-6 flex justify-center">
        <p className="font-mono text-gray-300">16 Juni 2023 - 18 Juni 2023</p>
      </footer>
    </div>
  )
}
