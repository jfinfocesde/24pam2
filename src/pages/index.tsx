import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (

//     <section className="text-zinc-400 dark:text-zinc-300 body-font bg-white dark:bg-zinc-900">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font text-zinc-900 dark:text-white mb-4">Submódulo Programación de Aplicaciones Móviles II</h1>
//           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-500 dark:text-zinc-400">Técnico Laboral como Asistente en Desarrollo de Software</p>
//           <div className="flex justify-center mt-12">
//             <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Programación Móvil II" className="rounded-lg max-w-96" />
//           </div>
//           <div className="flex mt-6 justify-center">
//             <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
//           <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
//               <img src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="SQLite CRUD" className="w-16 h-16 object-cover rounded-full" />
//             </div>
//             <div className="flex-grow">
//               <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Momento 1</h2>
//               <p className="leading-relaxed text-base">Creación de aplicaciones móviles con SQLite CRUD y RecyclerView</p>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
//               <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Firebase" className="w-16 h-16 object-cover rounded-full" />
//             </div>
//             <div className="flex-grow">
//               <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Momento 2</h2>
//               <p className="leading-relaxed text-base">Introducción a Firebase, Firebase Firestore, Firebase Authentication y consumo de Webservices</p>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
//             <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
//               <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Proyecto Integrador" className="w-16 h-16 object-cover rounded-full" />
//             </div>
//             <div className="flex-grow">
//               <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Momento 3</h2>
//               <p className="leading-relaxed text-base">Introducción a Firebase autentication, Consumo de Webservices, proyecto integrador</p>
//             </div>
//           </div>
//         </div>
//         <a href='/docs/intro'>
//           <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contenido</button>
//         </a>
//       </div>
//     </section>

//   );
// }

import React from 'react';
import { Smartphone, Database, Server } from 'lucide-react';

const MobileAppsProgrammingHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Submódulo Programación de Aplicaciones Móviles II</h1>
            <h2 className="text-2xl mb-6">Técnico Laboral como Asistente en Desarrollo de Software</h2>
            <p className="text-xl mb-8">Desarrolla aplicaciones móviles avanzadas con bases de datos locales y en la nube.</p>
            <a href='/docs/intro'>
              <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition">
                Ver Contenido
              </button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-blue-700 rounded-full flex items-center justify-center animate-pulse">
                <Smartphone size={100} className="text-yellow-400" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full flex items-center justify-center animate-bounce">
                <Database size={50} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <Server size={50} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Momento 1</h3>
            <ul className="list-disc list-inside">
              <li>Creación de aplicaciones móviles</li>
              <li>SQLite CRUD</li>
              <li>RecyclerView</li>
            </ul>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Momento 2</h3>
            <ul className="list-disc list-inside">
              <li>Introducción a Firebase</li>
              <li>Firebase Firestore</li>
              <li>Firebase Authentication</li>
              <li>Consumo de Webservices</li>
            </ul>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Momento 3</h3>
            <ul className="list-disc list-inside">
              <li>Firebase Authentication (avanzado)</li>
              <li>Consumo de Webservices (avanzado)</li>
              <li>Proyecto integrador</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Introducción a la Programación">
      <main>
        <MobileAppsProgrammingHero />
      </main>
    </Layout>
  );
}
