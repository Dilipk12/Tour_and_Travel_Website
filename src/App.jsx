import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const App = () => {
  const [rotateActive, setRotateActive] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRotateActive(true);
    }, 8000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <>
      {loader ? (
        <div
          style={{ backgroundImage: `url(/image/background.png)` }}
          className="flex justify-center items-center h-screen"
        >
          <img className="w-32" src="/image/loader.gif" alt="" />
        </div>
      ) : (
        <div
          className="h-screen overflow-hidden bg-bottom-0 relative"
          style={{ backgroundImage: `url(/image/badal.png)` }}
        >
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: "linear", delay: 2 }}
            className="py-5 px-20 fixed top-0 left-0 right-0"
          >
            <div className="container mx-auto flex justify-between items-center">
              <img className="w-5" src="/image/tjlogo.png" alt="" />
              <div className="hidden font-inter md:flex space-x-16">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
                <a href="#" className="hover:text-gray-400">
                  Packages
                </a>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </div>
              <button className="font-inter cursor-pointer bg-[#B8B8B8] px-6 py-2 text-sm rounded-[5px] text-black">
                Contact me
              </button>
            </div>
          </motion.nav>

          <div className="relative flex items-center justify-center h-screen">
            <motion.img
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: "linear" }}
              className="absolute top-32"
              src="/image/mountain.png"
              alt=""
            />

            <motion.img
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="absolute -bottom-6"
              src="/image/rock.png"
              alt=""
            />
            <motion.img
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
              className="absolute -left-36 top-32"
              src="/image/Vectorr.png"
              alt=""
            />
            <div className="z-50">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -110, scale: 0.6 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}
                className="flex justify-center items-center z-10"
              >
                <motion.img
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
                  className="w-16 font-semibold z-10"
                  src="/image/tjlogo.png"
                  alt=""
                />

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "linear", delay: 2 }}
                >
                  <h2 className="text-6xl font-light uppercase font-Instrument  pl-4 tracking-widest">
                    JIGYASA
                  </h2>
                  <h2 className="text-[26px] font-light uppercase font-Instrument  pl-4 tracking-widest">
                    TRAVEL AND TOUR
                  </h2>
                </motion.div>
              </motion.div>
              <motion.h1
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -220, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}
                className="text-5xl mt-28 tracking-[10px] font-Instrument z-50"
              >
                {" "}
                OM AADI KAILASH DARSHAN
              </motion.h1>

              {/* card data  */}

              <motion.div
                initial={{ y: 340 }}
                animate={{ y: -30, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
                className="flex items-center justify-center left-0 relative"
              >
                <div
                  style={{
                    backgroundImage: `url('https://www.indialogisticpackers.in/images/city-images/packers-movers-almora.jpg')`,
                  }}
                  className={`bg-cover bg-center h-[300px] w-[250px] absolute duration-300  ${
                    rotateActive
                      ? "-rotate-[30deg] -ml-[500px] mt-[130px]"
                      : "rotate-0 mt-0 ml-0"
                  } bg-red-300 rounded-3xl`}
                >
                  1
                </div>
                <div
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg')`,
                  }}
                  className={`bg-cover bg-center h-[300px] w-[250px] absolute duration-300  ${
                    rotateActive
                      ? "-ml-[300px] mt-[45px] -rotate-[15deg]"
                      : "rotate-0 mt-0 ml-0"
                  } bg-red-500 rounded-3xl`}
                >
                  2
                </div>
                <div
                  style={{
                    backgroundImage: `url('https://i0.wp.com/grehlakshmi.com/wp-content/uploads/2024/03/image-21.webp?fit=1200%2C675&ssl=1')`,
                  }}
                  className={`bg-cover bg-right h-[300px] w-[250px] z-20 absolute duration-300 -rotate-[0deg] bg-red-700 rounded-3xl`}
                >
                </div>
                <div
                  style={{
                    backgroundImage: `url('https://images.herzindagi.info/webstories/13482/best-waterfalls-in-the-world-1687863263.jpeg')`,
                  }}
                  className={`bg-cover bg-center h-[300px] w-[250px] absolute duration-300  ${
                    rotateActive
                      ? "-mr-[300px] mt-[45px] rotate-[15deg]"
                      : "rotate-0 mt-0 mr-0"
                  }  z-10 bg-red-400 rounded-3xl`}
                >
                  4
                </div>
                <div
                  style={{
                    backgroundImage: `url('https://assets.weforum.org/article/image/responsive_large_0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg')`,
                  }}
                  className={`bg-cover bg-center h-[300px] w-[250px] absolute duration-300  ${
                    rotateActive
                      ? "-mr-[500px] mt-[130px] rotate-[30deg]"
                      : "rotate-0 mt-0 mr-0"
                  } bg-red-900 rounded-3xl`}
                >
                  5
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
