import NavBar from "./components/navbar/navbar.component";
import GalleryItem from "./components/gallery-item/gallery-item.component";
import { data } from "../src/assets/data/data";

function App() {
  return (
    <div>
      <NavBar />
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
                {data.map((item) => (
                  <GalleryItem props={item} />
                ))}
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
                      <img
                        src="./src/assets/imgs/facebook.png"
                        width="48px"
                        class="mr-3"
                      />
                    </a>
                    <a target="_blank">
                      <img
                        src="./src/assets/imgs/instagram.png"
                        width="48px"
                        class="mr-3"
                      />
                    </a>
                    <a
                      href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.pinterest.com%2Ftherustlingdesign%2F_saved%2F%3Ffbclid%3DIwAR31fB3CgS1hUseRgWM8Q2eLYgxEoviP129Dt0Kc4wicqb4G0hfRfDd1pH4&h=AT2TuZN1PNQ77PJU9L0pOC6XA1SuW0zL--eP1EXS6tmG-LPjwDUfE_GAkOjO64KQuKebI-DklNCnaStWlrn-0mfA6FO3A0mJehSFeLS60yYEjwCOnFfkDtjXL1AanwBsLKvAIDbssYCVmSfwA7YRvQ"
                      target="_blank"
                    >
                      <img src="./src/assets/imgs/pinterest.png" width="48px" />
                    </a>
                  </div>
                </address>
              </div>

              <div class="w-1/3 m-5">
                <img
                  src="./src/assets/imgs/rustling-mark.png"
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
