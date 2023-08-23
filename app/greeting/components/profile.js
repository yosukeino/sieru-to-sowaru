import Image from "next/image";

export default function Profile() {
  return (
    <>
      <h1>塾長挨拶</h1>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
          <div className="mt-4 md:mt-0 text-center flex flex-col justify-center">
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              『教える、教わる学習塾シエルとソワル』
              <br />
              ​塾長 兼 代表
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <ruby>
                廣田　良輔<rt>ひろた　りょうすけ</rt>
              </ruby>
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              1990年生まれ、兵庫県姫路市出身。
              <br />
              兵庫県立姫路西高等学校卒業。
              <br />
              自治医科大学に入学し、栃木県に移住。
              <br />
              得意教科：数学(数検1級)／英語(TOEIC935)
              <br />
              ​趣味：料理・グルメ巡り・サウナ・サッカー
              <br />
            </p>
          </div>
          <Image src="/img/portrait.png" width={500} height={500} alt="塾長" />
        </div>
      </section>
      <section className="bg-bg_yellow dark:bg-gray-900">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:lg:px-6 ">
          <div className="flex items-center justify-center">
          <Image
            src="/img/logo_800_800.png"
            width={300}
            height={300}
            alt="taiken"
            content="fill"
          />
          </div>
          <div className="mt-4 md:mt-0 text-center flex flex-col justify-center">
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              大学在籍中は、塾講師や家庭教師を務め、約40名の学生の指導を経験。
              <br />
              勉強が嫌いな学生に「わかる楽しみ」、
              <br />
              「より難度の高い問題へ挑戦するワクワク感」を実感してもらうことが得意。
              <br />
              その後は教育業界の道を目指しながらも、
              <br />
              自ら培った経験やノウハウ、専門性を生かし、サービス業を経営。
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              2022年8月、
              <br />
              かねてからの夢であった学習塾を立ち上げ、
              <br />
              『教える、教わる学習塾　シエルとソワル』を開校した。
              <br />
            </p>
          </div>
          <Image src="/img/kaikou.webp" width={500} height={500} alt="塾長" />
        </div>
      </section>
    </>
  );
}
