<template>

    <body class="text-gray-700 bg-white" style="font-family: 'Helvetica', sans-serif">
        <div class="pcnone w-full bg-cover bg-center" style="height:30rem; background-image: url('/img/nagasaki01.jpg');">
            <div class="flex items-center justify-center h-full w-full">
                <!--
                        <div class="text-center">
                        <h2 class="text-white text-4xl font-semibold uppercase">UPDDOR</h2>
                    </div>
                    -->
                <div class="container mx-auto px-6">
                    <div class="w-full md:w-1/2">
                        <img src="~@/static/img/type.png" alt="update">
                    </div>
                    <h3 class="text-xl mb-8 text-gray-200">
                        ＵＰ ＤＯＯＲＳは時代に合ったＵＰＤＡＴＥを続けてまいります
                    </h3>
                    <button data-aos="zoom-in" onclick="location.href='#contact'" class="text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider bg-orange-500 hover:bg-orange-400 focus:outline-none ...">
                        お問い合わせ
                    </button>
                </div>
            </div>
        </div>
        <!--parallaxTes-->
        <div class="spnone bg-header flex items-center justify-center h-screen pb-12">
            <div class="container mx-auto px-6">
                <div class="w-full md:w-1/2">
                    <img src="~@/static/img/type.png" alt="update">
                </div>
                <h3 class="text-xl mb-8 text-gray-200">
                    ＵＰ ＤＯＯＲＳは時代に合ったＵＰＤＡＴＥを続けてまいります
                </h3>
                <nuxt-link v-scroll-to="'#contact'" to><button onclick="location.href='#contact'" class="text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider bg-orange-500 hover:bg-orange-400 focus:outline-none ...">
                    お問い合わせ
                </button></nuxt-link>
            </div>
        </div>
        <!-- Features -->
        <section class="container mx-auto px-6 p-10">
            <h2 id="about" class="text-4xl font-bold text-center text-teal-900 mb-8">
                わたしたちについて
            </h2>
            <div class="flex items-center flex-wrap mb-20">
                <h3 class="my-4 text-2xl text-gray-800">
                  エンジニアリングでお客さまのさまざまな課題を解決し、ビジネスの成長に貢献する
                </h3>
                <div class="w-full md:w-1/2">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">
                        01
                    </h4>
                    <p class="tracking-wide leading-7 text-gray-600 mb-8">
                      UP DOORSは多種多様なお客さまのニーズに応えエンジニアリングを提供しデジタルトランスフォーメーション、デジタルビジネスをサポートいたします。
                    </p>
                </div>
                <div class="w-3/4 mx-auto md:w-1/3">
                    <img src="~@/static/img/about01.svg" alt="update">
                </div>
            </div>
            <div class="flex items-center flex-wrap mb-20">
                <div class="w-3/4 mx-auto md:w-1/3">
                    <img src="~@/static/img/about02.svg" alt="update">
                </div>
                <div class="w-full md:w-1/2 sm:pl-10">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">
                        02
                    </h4>
                    <p class="tracking-wide leading-7 text-gray-600 mb-8">
                        高品質かつ安定したエンジニアリングを提供するために内部リソースの強化に尽力しエンジニア、営業への高還元はもちろんのこと幸福度を引き上げることを目指しております。
                    </p>
                </div>
            </div>
            <div class="flex items-center flex-wrap mb-20">
                <div class="w-full md:w-1/2">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">
                        03
                    </h4>
                    <p class="tracking-wide leading-7 text-gray-600 mb-8">
                        弊社の企業理念である『期待値を読み取る、そして超える / Read the expected value, And exceed』組織
                        </p>
                </div>
                <div class="w-3/4 mx-auto md:w-1/3">
                    <img src="~@/static/img/about03.svg" alt="update">
                </div>
            </div>
        </section>

        <div class="pcnone w-full bg-cover bg-center" style="height:30rem; background-image: url('/img/nagasaki02.jpg');">
            <div class="flex items-center justify-center h-full w-full">
                <!--
                        <div class="text-center">
                        <h2 class="text-white text-4xl font-semibold uppercase">UPDDOR</h2>
                    </div>
                    -->
                <div class="container mx-auto px-6">
                    <blockquote class="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
                        <h3 class="kakko font-bold italic text-2xl">
                            わたしたちにできること
                        </h3>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="spnone bg-quote container flex items-center justify-center h-screen mx-auto">
            <blockquote class="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
                <p class="kakko font-bold italic text-3xl">
                    わたしたちにできること
                </p>
            </blockquote>
        </div>
        <!--StepBoder-->
        <div class="mt-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fcbe32" fill-opacity="1" d="M0,288L0,128L36.9,128L36.9,128L73.8,128L73.8,32L110.8,32L110.8,288L147.7,288L147.7,128L184.6,128L184.6,64L221.5,64L221.5,0L258.5,0L258.5,32L295.4,32L295.4,128L332.3,128L332.3,128L369.2,128L369.2,64L406.2,64L406.2,0L443.1,0L443.1,256L480,256L480,96L516.9,96L516.9,224L553.8,224L553.8,64L590.8,64L590.8,64L627.7,64L627.7,64L664.6,64L664.6,192L701.5,192L701.5,128L738.5,128L738.5,0L775.4,0L775.4,64L812.3,64L812.3,32L849.2,32L849.2,32L886.2,32L886.2,64L923.1,64L923.1,192L960,192L960,32L996.9,32L996.9,96L1033.8,96L1033.8,64L1070.8,64L1070.8,96L1107.7,96L1107.7,64L1144.6,64L1144.6,160L1181.5,160L1181.5,288L1218.5,288L1218.5,128L1255.4,128L1255.4,96L1292.3,96L1292.3,224L1329.2,224L1329.2,160L1366.2,160L1366.2,224L1403.1,224L1403.1,64L1440,64L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
            </svg>
        </div>
        <!-- Testimonials -->
        <section style="background-color:#FCBE32;">
            <div class="container mx-auto px-6 pt-20 pb-40">
                <h2 id="business" class="text-4xl font-bold text-center text-gray-800 mb-8">
                    事業内容
                </h2>
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/3 px-2 mb-4">
                        <div class="bg-white rounded shadow py-2">
                            <p class="text-gray-500 text-center text-xl md:text-xl mb-4 px-6" style="color:#ff6633;">
                                システムエンジニアリング
                            </p>
                            <div style="display: inline;" class="h-24">
                                <img src="~@/static/img/business01.svg" alt="ses" class="w-32 mx-auto">
                            </div>
                            <p class="text-gray-800 text-base px-6 my-5">
                                要件定義から運用保守まで対応可能な20〜30代のエンジニアが在籍しております。
                                IT市場の成長過程でリソースの獲得・確保・調整が必要となる中
                                《チームUP DOORS》は、より高い生産性・品質・雑談を掲げITリソースを提供いたします。</p>
                            <p class="text-gray-800 text-base px-6 mb-5">
                                お客様の発展へ貢献できるよう努め、社会貢献へ取り組みます。
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-2 mb-4">
                        <div class="bg-white rounded shadow py-2">
                            <p class="text-gray-500 text-center text-xl md:text-xl mb-4 px-6" style="color:#ff6633;">
                                独立支援事業
                            </p>
                            <div style="display: inline;" class="h-24">
                                <img src="~@/static/img/business02.svg" alt="incubation" class="w-48 sm:w-56 mx-auto">
                            </div>
                            <p class="text-gray-800 text-base px-6 my-5">
                                正社員からフリーランスに転身される方のご相談やサポートをしております。
                            </p>
                            <p class="text-gray-800 text-base px-6 mb-5">
                                個人事業主でありながら、《チームUP DOORS》の一員として活動していただくのが特徴。
                                報酬還元率は受注単価の88パーセント。</p>
                            <p class="text-gray-800 text-base px-6 mb-5">
                                その他、社内イベントを活発的に開催しており、慰安旅行や誕生日祝い、懇親会など各々が孤立しないようオフラインはもちろんのこと、オンラインコミュニティ強化に力を入れております。
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-2 mb-4">
                        <div class="bg-white rounded shadow py-2">
                            <p class="text-gray-500 text-center text-xl md:text-xl mb-4 px-6" style="color:#ff6633;">
                                制作事業
                            </p>
                            <div style="display: inline;" class="h-24">
                                <img src="~@/static/img/business03.svg" alt="web" class="w-32 mx-auto">
                            </div>
                            <p class="text-gray-800 text-base px-6 my-5">
                                PC、スマートフォンをはじめワンソースで制作
                                お客さまがご自身で情報発信、更新できるブログシステムを構築します。</p>
                            <p class="text-gray-800 text-base px-6 mb-5">
                                WEBサイト、ページ公開後の更新サポートやCMS改修など承ります。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Parallax_end-->
        <!--StepBoder-->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fcbe32" fill-opacity="1" d="M0,256L0,224L36.9,224L36.9,224L73.8,224L73.8,0L110.8,0L110.8,224L147.7,224L147.7,64L184.6,64L184.6,160L221.5,160L221.5,192L258.5,192L258.5,32L295.4,32L295.4,32L332.3,32L332.3,64L369.2,64L369.2,64L406.2,64L406.2,192L443.1,192L443.1,320L480,320L480,96L516.9,96L516.9,32L553.8,32L553.8,128L590.8,128L590.8,256L627.7,256L627.7,96L664.6,96L664.6,0L701.5,0L701.5,224L738.5,224L738.5,128L775.4,128L775.4,96L812.3,96L812.3,128L849.2,128L849.2,192L886.2,192L886.2,320L923.1,320L923.1,128L960,128L960,192L996.9,192L996.9,128L1033.8,128L1033.8,192L1070.8,192L1070.8,96L1107.7,96L1107.7,192L1144.6,192L1144.6,320L1181.5,320L1181.5,128L1218.5,128L1218.5,128L1255.4,128L1255.4,256L1292.3,256L1292.3,96L1329.2,96L1329.2,32L1366.2,32L1366.2,0L1403.1,0L1403.1,224L1440,224L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"></path>
        </svg>
        <!-- Trainers Section -->
        <section class="pt-20 pb-48">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 class="text-4xl font-semibold uppercase">
                            ボードメンバー
                        </h2>
                        <p class="text-lg leading-relaxed m-4">
                            UP DOORSのボードメンバー紹介
                        </p>
                    </div>
                </div>
                <!-- Trainer Card Wrapper -->
                <div class="flex flex-wrap">
                    <!-- Card 1 -->
                    <div class="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                        <div class="px-6">
                            <img src="~@/static/img/member01.svg" alt="update" class="shadow-lg rounded max-w-full mx-auto" style="max-width: 200px">
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold">千葉　智博</h5>
                                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                    システムエンジア兼インフラエンジニア
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Card 2 -->
                    <div class="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                        <div class="px-6">
                            <img src="~@/static/img/member02.svg" alt="update" class="shadow-lg rounded max-w-full mx-auto" style="max-width: 200px">
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold">鈴木　照脩</h5>
                                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                    システムエンジニア
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Card 3 -->
                    <div class="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                        <div class="px-6">
                           <img src="~@/static/img/member03.svg" alt="update" class="shadow-lg rounded max-w-full mx-auto" style="max-width: 200px">
                            <div class="pt-6 text-center">
                                <h5 class="text-xl font-bold">佐々木　俊英</h5>
                                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                    ICTコンサルタント
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--company-->
        <section class="pb-20 relative block bg-white text-black">
            <div class="w-full bg-cover bg-center" style="height:18rem; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);">
                <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div class="text-center">
                        <h2 id="company" class="text-white text-4xl font-semibold uppercase">Company</h2>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
                <div class="flex flex-wrap text-center justify-center">
                    <div class="w-full lg:w-6/12 px-4">
                        <div>
                            <dl>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">会社名</dt>
                                    <dd class="block flex-grow-1 text-left">UP DOORS株式会社</dd>
                                </div>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">所在地</dt>
                                    <dd class="block flex-grow-1 text-left">
                                        <p><span class="inline-block">〒102-0074</span>
                                            <span class="inline-block">東京都千代田区九段下南1-5-6りそな九段ビル５Ｆ</span>
                                        </p>
                                    </dd>
                                </div>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">設　立</dt>
                                    <dd class="block flex-grow-1 text-left">2020年1月22日</dd>
                                </div>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">資本金</dt>
                                    <dd class="block flex-grow-1 text-left">1,000,000円</dd>
                                </div>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">代表者名</dt>
                                    <dd class="block flex-grow-1 text-left">森崎　良二</dd>
                                </div>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">従業員数</dt>
                                    <dd class="block flex-grow-1 text-left">10人</dd>
                                </div>
                                <div class="flex py-4 border-b-2 border-gray-300">
                                    <dt class="block flex-shrink-0 sm:w-56 w-24">事業内容</dt>
                                    <dd class="block flex-grow-1 text-left">
                                        - システムエンジニアリング<br>- WEBコンテンツ制作・企画<br>
                                        - フリーランス独立支援
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact Header Section -->
        <section class="pb-20 relative block bg-black text-white">
            <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px)">
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
                <div class="flex flex-wrap text-center justify-center">
                    <div class="w-full lg:w-6/12 px-4">
                        <h2 id="contact" class="text-4xl font-semibold text-white uppercase">
                            Contact Us
                        </h2>
                        <p class="text-lg leading-relaxed mt-4 mb-4">
                            エンジニアでお困りの方、サイトのリニューアルをお考えの方、外注先をお探しの企業さま
                            その他ご相談など、お気軽にご連絡ください。<br>数日中に返信がない場合は <a href="mailto:info@updoors.jp" class="underline hover:text-orange-400 focus:outline-none focus:underline ...">info@updoors.jp</a>へ直接ご連絡いただければ幸いです。</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact Form -->
        <section class="relative block py-24 lg:pt-0 bg-black">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300" data-aos="fade-up-right">
                            <div class="flex-auto p-5 lg:p-10 bg-orange-500 text-white">
                                <h4 class="text-2xl font-semibold">お気軽にお問い合わせください</h4>
                                <p class="leading-relaxed mt-1 mb-4">
                                    下記入力フォームよりお気軽にお問い合わせください。<br>当該担当者よりご返事させていただきます。
                                </p>
                                <div class="relative w-full mb-3 mt-8">
                                    <label class="block uppercase text-xs font-bold mb-2" for="full-name">お名前</label><input type="text" class="text-gray-900 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="アップドアーズ" style="transition: all 0.15s ease 0s" />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-xs font-bold mb-2" for="email">メールアドレス</label><input type="email" class="text-gray-900 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="xxxxxx@up-doors.com" style="transition: all 0.15s ease 0s" />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-xs font-bold mb-2" for="message">お問い合わせ内容</label><textarea rows="4" cols="80" class="text-gray-900 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="エンジニア支援を希望"></textarea>
                                </div>
                                <div class="text-center mt-6">
                                    <button class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all 0.15s ease 0s">
                                        送信
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>

<!--ParallaxTest_css-->
<style>
    .bg-header {
        background: url(~@/static/img/nagasaki01.jpg) center center no-repeat;
        background-attachment: fixed;
    }

    .bg-quote {
        background: url(~@/static/img/nagasaki02.jpg) center center no-repeat;
        background-attachment: fixed;
    }

    @media screen and (max-width: 480px) {
        .spnone {
            display: none;
        }
    }

    @media screen and (min-width: 480px) {
        .pcnone {
            display: none;
        }
    }

    .kakko {
        position: relative;
        padding: 1em 2em;
        text-align: center;
    }

    .kakko:before,
    .kakko:after {
        position: absolute;
        content: '';
    }

    .kakko:after {
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
    }

    .kakko:before {
        right: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
    }

</style>
