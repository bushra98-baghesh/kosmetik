/* eslint-disable react/no-unescaped-entities */
"use client";
import HeroSection from "@/components/about/HeroSection";
import AB_1 from "../../../public/images/AB-4.jpg";
import AB_2 from "../../../public/images/AB-2.jpg";
import AB_3 from "../../../public/images/HM-P.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <motion.div
              initial={{ translateX: -100, opacity: 0.4 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="img-box flex items-center justify-center"
            >
              <img
                src={AB_1.src}
                alt="kosmetik"
                className="max-lg:mx-auto rounded-md"
              />
            </motion.div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-xl lg:text-2xl text-black mb-9 max-lg:text-center relative">
                  German Board für Bildung und Beratung stellt sich vor
                </h2>
                <p className="font-normal  leading-6 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Das German Board für Bildung und Beratung wurde am 28.08.2017
                  in Wuppertal mit den Rechtsform UG gegründet. German Board hat
                  zu Beginn seiner Gründung in den meisten Bundesländern auf
                  ehrenamtlicher Basis eine Reihe von Schulungen für Flüchtlinge
                  durchgeführt und nicht weniger als 1.500 junge Männer und
                  Frauen in den Bereichen Management und Wirtschaft ausgebildet.
                </p>
                <p className="font-normal  leading-6 text-gray-500 max-lg:text-center max-w-2xl mx-auto py-4">
                  Im Jahr 2019 wurde der Sitz der Firma in die Stadt Kleve und
                  die Rechtsform von der UG in die GmbH übertragen. Die
                  Fachgebiete des Unternehmens erweiterten sich nach der
                  Durchführung von Rechts- und Wirtschaftskursen im Zusammenhang
                  mit der Gründung von Projekten, der Verwaltungsentwicklung und
                  der Untersuchung der Bedingungen von Flüchtlingen. Der Fokus
                  liegt auf der Integration von Flüchtlingen in den Arbeitsmarkt
                  und hat durch die Fokussierung auf die Bedürfnisse von
                  Flüchtlingen eine gute Verbreitung erreicht. Im selben Jahr,
                  konkret am 30. September 2019, wurde eine Niederlassung des
                  Unternehmens in der Stadt Essen eröffnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src={AB_2.src}
                  alt="kosmetik german board"
                  className="block lg:hidden mb-9 mx-auto rounded-md"
                />

                <p className="font-normal  leading-6 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Das Unternehmen befasst sich damit, die Fähigkeiten von
                  Menschen zu entwickeln, sie wissenschaftlich und beruflich
                  vorzubereiten, ihre Führungsfähigkeiten zu entwickeln, um
                  Exzellenz in Gesellschaften und Institutionen zu erreichen,
                  und sie in den deutschen Arbeitsmarkt zu integrieren. Neben
                  spezialisierten Kursen für Institutionen und Arbeiter in
                  verschiedenen Lebensbereichen befasst sich das Unternehmen
                  auch damit, um Führungs- und Funktionsfähigkeiten zu
                  entwickeln, optimale Investitionen für den Selbstaufbau zu
                  erzielen und den Ehrgeiz der Auszubildenden und ihre
                  Zukunftsvision zu erreichen.
                </p>
                <p className="font-normal leading-6 py-4 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Das Unternehmen ist daran interessiert, die Kompetenzen von
                  Frauen zu verbessern und sie in den Arbeitsmarkt zu
                  integrieren, indem es sie in Spezialisierungen weiterbildet,
                  die ihrer Interesse entsprechen, einschließlich
                  Kosmetikkursen, Verwaltungs- und Rechtskursen. Das Unternehmen
                  hilft ihnen, ein eigenes Projekt zu eröffnen, indem es sie bei
                  der Einrichtung und Vergabe von Lizenzen begleitet.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ translateX: 100, opacity: 0.4 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="img-box "
            >
              <img
                src={AB_3.src}
                alt="About Us tailwind page"
                className="hidden object-cover w-full h-full lg:block rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-2xl text-center text-gray-900 font-bold mb-14">
            Unsere Unternehmenswerte
          </h2>
          <motion.div
            initial={{ translateY: 60, opacity: 0.4 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between"
          >
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 shadow-md shadow-black/20  bg-gradient-to-r from-fuchsia-600/40 to-purple-600/30 backdrop-blur-lg p-6 rounded-2xl">
              <div className="flex gap-5">
                <div className="flex-1 text-center">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Qualität
                  </h4>
                  <p className="text-sm text-gray-700 leading-5">
                    Bereitstellung der besten modernen und innovativen Methoden
                    der Bildung durch die neuesten modernen Bildungsmethoden auf
                    der Grundlage des Erfahrungsaustauschs.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 shadow-md shadow-black/20  bg-gradient-to-r from-fuchsia-600/40 to-purple-600/30 backdrop-blur-lg p-6 rounded-2xl">
              <div className="flex gap-5">
                <div className="flex-1 text-center">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Kreativität und Innovation
                  </h4>
                  <p className="text-sm text-gray-700 leading-5">
                    Vermittlung der Prinzipien der Zusammenarbeit und der
                    gemeinsamen Aktion unter den Mitgliedern desselben Teams.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 shadow-md shadow-black/20  bg-gradient-to-r from-fuchsia-600/40 to-purple-600/30 backdrop-blur-lg p-6 rounded-2xl">
              <div className="flex gap-5 text-center">
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Credibility and transparency
                  </h4>
                  <p className="text-sm text-gray-700 leading-5">
                    Providing information that benefits institutions and
                    individuals, with original content based on international
                    research and statistics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.9367660779694!2d7.015135124148087!3d51.45931741421574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2b123c6ac95%3A0x99808322f07040c6!2zS3JldXplc2tpcmNoc3RyYcOfZSA4LCA0NTEyNyBFc3Nlbiwg2KPZhNmF2KfZhtmK2Kc!5e0!3m2!1sar!2snl!4v1711310271906!5m2!1sar!2snl"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mx-auto w-full"
      ></iframe>
    </div>
  );
};
export default About;
