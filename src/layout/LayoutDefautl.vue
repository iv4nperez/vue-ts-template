<template>
    <div class="flex">
        <sidebar id="menu" class="sticky top-0 overflow-hidden h-screen shrink-0 z-20 shadow-5 bg-[#111827] w-[280px]">
            <div className="w-full h-[70px]  flex items-center px-5 justify-between">
                <figure>
                    <img src="https://react-material.fusetheme.com/assets/images/logo/logo.svg" alt="" />
                </figure>

                <button>
                    <!-- <FontAwesomeIcon className="group-hover:text-white text-white" icon={faBars} /> -->
                </button>
            </div>
            <div  className="overflow-y-auto h-screen ">
                <div className="w-full h-[190px] p-4 flex flex-col justify-center items-center">
                <div className="pb-6">
                    <figure>
                        <img className="rounded-full w-24 h-24 object-cover " src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg" alt="" />
                    </figure>
                    </div>

                    <p className="text-white font-medium text-sm">Abbott Keitch</p>
                    <p className="text-[#83a3ab] font-medium text-[13px]">admin@fusetheme.com</p>
                </div>


                <!-- here genereted list -->
                <ul className="px-3">
                    <div className="px-4 mt-7 py-3">
                        <span className="text-xs uppercase text-[#ffffff] font-bold font-inter ">Dashboards</span>
                        <p className="text-[11px] text-[#b8babf] font-medium font-inter">Unique dashboard designs</p>
                    </div>

                    <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                        <div className="flex justify-start items-center gap-4">
                            <!-- <FontAwesomeIcon className="group-hover:text-white text-[#b8babf]" icon={icon} /> -->
                            <RectangleStack class="text-white" />
                            <div>
                                <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                            </div>
                        </div>
                    </li>
        
                    <div className="px-4 mt-7 py-3">
                    <span className="text-xs uppercase text-[#ffffff] font-bold font-inter ">Dashboards</span>
                    <p className="text-[11px] text-[#b8babf] font-medium">Unique dashboard designs</p>
                    </div>


                    <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                        <div className="flex justify-start items-center gap-4">
                            <!-- <FontAwesomeIcon className="group-hover:text-white text-[#b8babf]" icon={icon} /> -->
                            <RectangleStack class="text-white" />
                            <div>
                                <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                            </div>
                        </div>
                    </li>
                    <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                        <div className="flex justify-start items-center gap-4">
                            <!-- <FontAwesomeIcon className="group-hover:text-white text-[#b8babf]" icon={icon} /> -->
                            <RectangleStack class="text-white" />
                            <div>
                                <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                            </div>
                        </div>
                    </li>
                    <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                        <div className="flex justify-start items-center gap-4">
                            <!-- <FontAwesomeIcon className="group-hover:text-white text-[#b8babf]" icon={icon} /> -->
                            <RectangleStack class="text-white" />
                            <div>
                                <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                            </div>
                        </div>
                    </li>
                    <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                        <div className="flex justify-start items-center gap-4">
                            <!-- <FontAwesomeIcon className="group-hover:text-white text-[#b8babf]" icon={icon} /> -->
                            <RectangleStack class="text-white" />
                            <div>
                                <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                            </div>
                        </div>
                    </li>

                    <div className="px-4 mt-7 py-3">
                    <span className="text-xs uppercase text-[#ffffff] font-bold font-inter ">Dashboards</span>
                    <p className="text-[11px] text-[#b8babf] font-medium">Unique dashboard designs</p>
                    </div>

                    <li className="w-full py-3 px-4 rounded-md hover:bg-white hover:bg-opacity-[0.1] mb-1 leading-5 cursor-pointer transition-all ease-in-out group">
                        <div className="flex justify-start items-center gap-4">
                            <!-- <FontAwesomeIcon className="group-hover:text-white text-[#b8babf]" icon={icon} /> -->
                            <RectangleStack class="text-white" />
                            <div>
                                <span className="font-medium text-[#b8babf] text-sm group-hover:text-white ">Prueba de contenido</span>
                            </div>
                        </div>
                    </li>


            </ul>
          <!-- here finish genereted list -->


            </div>
        </sidebar>
        <div class="w-full">
            <header class="h-16 shadow-md flex items-center px-4">
                Appbar
            </header>
            <main class="p-3 flex">
                <slot />
            </main>
        </div>
    </div>
</template>
<script setup lang="ts">
import RectangleStack from '../assets/icons/RectangleStack.vue'
</script>