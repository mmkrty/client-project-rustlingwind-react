function App() {
  return (
    <div>
      <nav class="flex justify-around items-center bg-white shadow-md p-2 position: fixed w-screen">
        <div class="w-36">
          <a href="#about">
            <img src="./src/rustling-logo.png" alt="logo" class="w-full" />
          </a>
        </div>
        <ul class="flex justify-between items-center">
          <li>
            <a class="p-2" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="p-2" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a class="p-2" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div class="w-screen">
        <main class="flex flex-col items-center justify-center">
          <section
            id="about"
            class="h-screen flex flex-wrap justify-around items-center"
          >
            <div class="">
              <h1 class="text-7xl mb-2 tracking-wider">風吹設計</h1>
              <p class="text-3xl mb-2">The Rustling Design</p>
              <p class="italic mb-1">
                讓我們陪你一起乘著微風，創造更多美的可能。
              </p>
              <ul class="flex my-5">
                <li class="text-2xl mr-3">品牌</li>
                <li class="text-2xl mr-3">插畫</li>
                <li class="text-2xl mr-3">視覺設計</li>
              </ul>
              <div class="text-white">
                <a href="#gallery">
                  <button class="px-5 py-2 m-3 shadow-md rounded-full bg-prime">
                    我們的作品
                  </button>
                </a>
                <a href="#contact">
                  <button class="px-5 py-2 m-3 shadow-md rounded-full bg-sec">
                    聯絡我們
                  </button>
                </a>
              </div>
            </div>
          </section>

          <section
            id="gallery"
            class="flex flex-wrap justify-center items-center px-5 scroll-mt-24"
          >
            <div class="flex flex-col items-center mb-10">
              <h2 class="text-5xl mb-10 ">作品集</h2>
              <div class="flex  flex-wrap justify-center items-center">
                <div class="flex flex-col mx-3 my-5">
                  <div class="w-96 h-96 overflow-hidden">
                    <img
                      src="./src/graphic_design/test.jpg "
                      alt="text"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>國一先修班|DM視覺設計</a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3  my-5">
                  <div class="w-96  h-96 overflow-hidden">
                    <img
                      src="./src/graphic_design/milk.jpg"
                      alt="milk"
                      class="w-full"
                    />
                    <img
                      src="./src/graphic_design/milk1.jpg"
                      alt="milk"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>寵物羊奶粉|摺頁設計</a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3  my-5">
                  <div class="w-96 h-96 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/originals/2d/62/3a/2d623ac8107fa56092fdfb53d7350f0b.jpg"
                      alt="visual_design"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>美的在地閱讀與創生|展覽視覺設計</a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3  my-5">
                  <div class="w-96  h-96 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/originals/35/6c/3b/356c3bcac403ab280012437163297c32.jpg"
                      alt="visual_design"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>提升小一新鮮人的ㄅㄆㄇ能力|DM視覺設計</a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3  my-5">
                  <div class="w-96 h-96 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/originals/7b/fb/c6/7bfbc6a356012070583d6cae1a044ae9.jpg"
                      alt="visual_design"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>放學窩課程貼文插畫|illustration</a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3  my-5">
                  <div class="w-96  h-96 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/originals/9b/83/1a/9b831a07f54b457d796a8c5e1c3de6de.jpg"
                      alt="visual_design"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>2022母親節卡片|illustration</a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3  my-5">
                  <div class="w-96 h-96 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/originals/b4/c0/dd/b4c0dda96f736cecf6716524fddcc272.jpg"
                      alt="visual_design"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a href="./products.html">
                      晚安凍膜包裝設計|Package Design
                    </a>
                  </h4>
                </div>
                <div class="flex flex-col mx-3 my-5">
                  <div class="w-96  h-96 overflow-hidden">
                    <img
                      src="https://i.pinimg.com/originals/30/b8/20/30b820c99141f73e460fd1829ff7f401.jpg"
                      alt="visual_design"
                      class="w-full"
                    />
                  </div>
                  <h4>
                    <a>四物飲包裝設計|Package Design</a>
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            class=" my-10 flex flex-col items-center  scroll-mt-24"
          >
            <h2 class="text-5xl mb-10">聯絡我們</h2>
            <div class="flex flex-wrap items-center justify-center">
              <div class="m-5 p-5">
                <p class="text-xl my-3 ">Office Hour: 週一~週五 0900-1800</p>
                <address>
                  <p class="text-lg my-2">Email: therustlingdesign@gmail.com</p>
                  <p class="text-lg my-2">Tel: 0800-000-000</p>
                  <div class="flex mt-4">
                    <a
                      href="https://www.facebook.com/the.rustling.Design"
                      target="_blank"
                    >
                      <img src="./src/facebook.png" width="48px" class="mr-3" />
                    </a>
                    <a target="_blank">
                      <img
                        src="./src/instagram.png"
                        width="48px"
                        class="mr-3"
                      />
                    </a>
                    <a
                      href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.pinterest.com%2Ftherustlingdesign%2F_saved%2F%3Ffbclid%3DIwAR31fB3CgS1hUseRgWM8Q2eLYgxEoviP129Dt0Kc4wicqb4G0hfRfDd1pH4&h=AT2TuZN1PNQ77PJU9L0pOC6XA1SuW0zL--eP1EXS6tmG-LPjwDUfE_GAkOjO64KQuKebI-DklNCnaStWlrn-0mfA6FO3A0mJehSFeLS60yYEjwCOnFfkDtjXL1AanwBsLKvAIDbssYCVmSfwA7YRvQ"
                      target="_blank"
                    >
                      <img src="./src/pinterest.png" width="48px" />
                    </a>
                  </div>
                </address>
              </div>

              <div class="w-1/3 m-5">
                <img
                  src="./src/rustling-mark.png"
                  alt="rustling-mark"
                  class="w-full rounded-full"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
