/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Share2, 
  Store, 
  GitBranch, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Cpu, 
  Handshake, 
  Globe, 
  Rocket, 
  Home, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-border-dark max-w-md mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Share2 className="text-white w-5 h-5" />
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">TSUNAGU</h2>
        </div>
        <button className="text-primary text-sm font-bold tracking-wide hover:opacity-80 transition-opacity">
          Contact
        </button>
      </header>

      <main className="max-w-md mx-auto pb-24">
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-[10px] font-semibold uppercase tracking-widest">AI Implementation Partner</span>
            </div>
            
            <h1 className="text-white text-4xl font-bold leading-[1.1] tracking-tight">
              AI automation built for <span className="text-primary">real business</span> operations in Japan
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              We don’t just advise — we design, build, and implement AI-driven workflows that improve efficiency and scale operations.
            </p>
            
            <div className="flex flex-col gap-4 mt-4">
              <a 
                href="https://calendar.app.google/Xz8emYdEWSd3pdgeA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/25 active:scale-[0.98] flex items-center justify-center"
              >
                Schedule a Free Consultation
              </a>
              <p className="text-slate-500 text-xs text-center italic">
                Built with real operational needs in mind
              </p>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-border-dark aspect-video relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent z-10"></div>
              <img 
                alt="Abstract neural network visualization" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq0mq4rPXyvlYF6d86SzLIPWg5Vo-knm6UuDNfz3c_yNIR9y_WnE0Q-iQQhXqeYL-fP4OKQAt8RMftWpG_5fxttYx009iBv8hCyuKjnOh_mxkWT9fNuzqRyBLnZsb_wx3RcsO6MD7hKUO-Nl7da_TqLbHJGg8raTyBuB9YcaMf1aBYIAANek4D5WhBqtU_8qVum9JgdNla0V83KbbAKpj4Hnv5_NIoYsEXtI_bX5WWqAwK-cnaiDtIiM8iMhJIl0qs5SAw_BvAa2ZC"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Proof Section */}
        <section className="px-4 py-12 bg-surface-dark/30 border-y border-border-dark">
          <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-center">Trusted for Real-World Impact</h3>
          <div className="flex flex-col gap-4">
            {[
              { icon: Store, text: "Designed for a major retail company in Japan" },
              { icon: GitBranch, text: "Scalable for operations across 800 stores" },
              { icon: ShieldCheck, text: "Built for real-world business environments" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark"
              >
                <item.icon className="text-primary w-5 h-5" />
                <p className="text-sm font-medium text-slate-200">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-4 py-20">
          <h2 className="text-3xl font-bold mb-10 text-white">What We Do</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Zap, title: "AI-powered workflow automation", desc: "Eliminate repetitive tasks with intelligent logic layers." },
              { icon: MessageSquare, title: "Customer response automation", desc: "Human-like interactions for support and engagement." },
              { icon: TrendingUp, title: "Sales & outreach automation", desc: "Scalable lead generation with personalized precision." },
              { icon: Cpu, title: "Internal operations optimization", desc: "Streamline internal tools and data pipelines." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-surface-dark border border-border-dark group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{service.title}</h4>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-4 py-20 bg-primary/5">
          <h2 className="text-3xl font-bold mb-10 text-white">Impact Stories</h2>
          <div className="space-y-12">
            {[
              {
                id: "01",
                title: "Automated Review Management",
                desc: "Automatically collect reviews across platforms. AI performs sentiment analysis and generates optimized responses, reducing manual workload by 85%.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7-JMIAzZgxpnk9_RHQCm0OHS6jGmwvq45SVmnGRmWTgzNVC6_VnxezDLnbbPMoAhQ06lt6D9ueQKyeorcaYGw9X64eqJRlJd6zZSzlwYx5aslPCUvY0lkWaeIR84rPuYfKXGViI9ax5pnfnekt2lEeQyQ6E1XPEDHrax7bJ8qR9zp7WRU-YXttSsXfii50nC1AJSdCxBYYKVkmhynSjysw2MWcRYimsaXfBJiiaguBZXJqB7WdBnzoyK5pnOIVqpzw-lWBWC6owjd"
              },
              {
                id: "02",
                title: "Hyper-Personalized Sales",
                desc: "Target list building combined with personalized outreach messages. Automated tracking ensures no lead is dropped while maintaining a human touch.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDyVLDsKxUTLoSTfTw-9LdyK48bvL62_wXam9SkLWvoAZeWVhbaLXHZwXGt76y0jGGr-BlfjgGOMqKeHMnCp3OJzYtoW0-vSH2KjEawmFq9-Nd_2QXGXimeHjCy1eYYdwBNQwb4JU2Vo1FFSmd1axXuTvPN6lHuu4Mb1ZQolbyP-7QqSP1in-eUKlqxZeeEPirMXFYX6u3jn_e6gNvAOF9wJ0MFbyZzx-e9PFK1KlaoWasKtbRFUIDaP64GvnTkl06pLu58uSFpXQ0"
              }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-border-dark group">
                  <img 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={story.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary px-3 py-1 rounded text-[10px] font-bold uppercase text-white tracking-wider">Case Study {story.id}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{story.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {story.desc}
                </p>
                <button className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider mt-1 group">
                  Read full story <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Us */}
        <section className="px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Why TSUNAGU</h2>
          <div className="space-y-12">
            {[
              { icon: Handshake, title: "We don’t just advise — we implement", desc: "Consultants leave a plan. We leave a working system." },
              { icon: Globe, title: "Japan + global hybrid team", desc: "Local expertise with world-class technical engineering." },
              { icon: Rocket, title: "End-to-end support", desc: "From initial strategy to ongoing maintenance and scaling." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-slate-500 text-sm mt-2 max-w-[280px] mx-auto">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="px-4 py-20 bg-surface-dark/50 border-y border-border-dark">
          <h2 className="text-3xl font-bold mb-10 text-white">Our Process</h2>
          <div className="relative space-y-12">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30"></div>
            {[
              { step: 1, title: "Consultation", desc: "Understanding your unique operational bottlenecks." },
              { step: 2, title: "Proposal", desc: "Customized roadmap of AI integrations and ROI projections." },
              { step: 3, title: "Build", desc: "Agile development and integration into your current tools." },
              { step: 4, title: "Launch & Support", desc: "Ongoing monitoring and iteration for maximum efficiency." }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-6"
              >
                <div className="z-10 flex-none w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                  {p.step}
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-white">{p.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-24 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-primary rounded-3xl p-8 shadow-2xl shadow-primary/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Start with a free consultation</h2>
            <p className="text-white/80 mb-8 relative z-10">
              We’ll help you identify where AI and automation can create immediate impact.
            </p>
            <a 
              href="https://calendar.app.google/Xz8emYdEWSd3pdgeA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-primary h-14 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors active:scale-[0.98] relative z-10 flex items-center justify-center"
            >
              Schedule a Free Consultation
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-border-dark text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <Share2 className="text-white w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-white">TSUNAGU</span>
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">© 2024 TSUNAGU AI Implementation Partners. All rights reserved.</p>
        </footer>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-dark bg-background-dark/90 backdrop-blur-lg px-4 pb-8 pt-3 max-w-md mx-auto flex justify-around items-center">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <Home className="w-6 h-6" />
          <p className="text-[9px] font-bold uppercase tracking-tighter">Home</p>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors" href="#">
          <Rocket className="w-6 h-6" />
          <p className="text-[9px] font-bold uppercase tracking-tighter">Services</p>
        </a>
        <a 
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors" 
          href="https://calendar.app.google/Xz8emYdEWSd3pdgeA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-6 h-6" />
          <p className="text-[9px] font-bold uppercase tracking-tighter">Consult</p>
        </a>
      </nav>
    </div>
  );
}
