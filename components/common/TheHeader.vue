<template>
    <!--Nav-->
    <nav>
      <div
        class="container mx-auto px-6 py-6 flex justify-between items-center"
      >
        <a class="font-bold text-2xl lg:text-4xl" href="#">
            <img src="~/../../assets/images/logotype_praimry.png">
        </a>
        <div class="block lg:hidden">
        <tasty-burger-button
        :type="buttonType"
        :active="isActive"
        :size="size"
        :color="color"
        :active-color="activeColor"/>
        </div>
        <div class="hidden lg:block">
          <ul class="inline-flex">
            <li>
              <a class="px-4 font-bold hover:underline hover:text-orange-400 focus:outline-none focus:underline..." href="#about">UP DOORSについて</a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800 hover:underline hover:text-orange-400 focus:outline-none focus:underline..." href="#business">事業内容</a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800 hover:underline hover:text-orange-400 focus:outline-none focus:underline..." href="#company">企業情報</a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800 hover:underline hover:text-orange-400 focus:outline-none focus:underline..." href="#contact">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    data () {
    return {
      buttonType: 'spring',
      isActive: false,
      size: 'l',
      color: '#6E7785',
      activeColor: '#FCBE32'
    }
  }
}
</script>
