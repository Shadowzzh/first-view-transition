import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div>
      <div className={cn("w-screen h-screen")}>
        <div className={cn("pt-14", "max-w-5xl mx-auto p-8")}>
          <Header />

          <div className="flex flex-col gap-2">
            {/* 优势与局限性 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                优势与局限性
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                优势
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>
                  <strong>简化开发流程</strong>
                  ：开发者无需编写复杂的动画逻辑，利用 API
                  就能实现高质量的过渡效果。
                </li>
                <li>
                  <strong>性能优化</strong>
                  ：浏览器原生支持硬件加速和渲染优化，能够提供比 JavaScript
                  实现更流畅的动画。
                </li>
                <li>
                  <strong>一致性体验</strong>
                  ：由浏览器统一处理动画效果，确保在不同页面或组件之间保持一致的过渡风格。
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                局限性
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>兼容性问题</strong>：目前 View Transition API 主要在
                  Chromium 内核的浏览器中实验性支持，
                  其他浏览器可能还不支持或支持不完善。因此，在实际项目中需要为不支持该
                  API 的环境提供降级方案。
                </li>
                <li>
                  <strong>功能限制</strong>：作为一项新技术，目前 API
                  的功能和自定义程度可能还不如成熟的动画库丰富，
                  但随着社区和厂商的不断完善，未来其应用场景将进一步扩展。
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                什么是 <span className="transition">View Transition</span>{" "}
                技术？
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                View Transition 技术是一种由浏览器原生支持的
                API，旨在实现页面或视图状态切换时的平滑动画效果。
                借助这一技术，开发者可以在切换页面或更新部分内容时，通过简单的
                API 调用，让浏览器自动捕捉前后状态的变化，
                并在两者之间进行无缝过渡。相比传统的手动编写动画效果，View
                Transition API
                能够大大降低实现复杂动画的门槛，同时提升性能和一致性。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
