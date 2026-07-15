export default function ZeusPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <section className="mb-4 border-b pb-4">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              Critical Threat
            </span>

            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Banking Trojan
            </span>

            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Windows Malware
            </span>
          </div>

          <h1 className="text-5xl font-serif mb-5 mt-8">Zeus (Zbot)</h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            One of the most influential banking Trojans in cybersecurity
            history, responsible for large-scale credential theft, financial
            fraud, and botnet operations worldwide.
          </p>
        </section>

        {/* Page Title */}
        {/* <h1 className="text-4xl font-serif border-b pb-3 mb-6">
          Zeus (Zeus Botnet)
        </h1> */}

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="flex-1 text-[17px] leading-8 text-gray-800">
            {/* Intro */}
            <p className="mb-6">
              Zeus, also known as Zbot, is one of the most notorious banking
              Trojans in cybersecurity history. First discovered in 2007, Zeus
              was designed to steal sensitive financial information from
              infected computers, particularly online banking credentials.
              Developed by cybercriminals, it became one of the most successful
              malware families ever created and was responsible for financial
              losses amounting to hundreds of millions of dollars worldwide.
            </p>

            {/* TOC */}
            <div className="border bg-gray-50 p-5 mb-8 w-fit">
              <h2 className="font-bold mb-3">Contents</h2>

              <ol className="list-decimal pl-5 space-y-1 text-blue-700">
                <li>
                  <a href="#purpose">Purpose and Target</a>
                </li>
                <li>
                  <a href="#keyfeatures">Key Features</a>
                </li>
                <li>
                  <a href="#stealing">How Zeus Stole Information</a>
                </li>
                <li>
                  <a href="#botnet">Botnet Architecture</a>
                </li>
                <li>
                  <a href="#incidents">Major Incidents and Variants</a>
                </li>
                <li>
                  <a href="#timeline">Timeline</a>
                </li>
                <li>
                  <a href="#impact">Impact on Cybersecurity</a>
                </li>
                <li>
                  <a href="#protection">Protection and Prevention</a>
                </li>
                <li>
                  <a href="#conclusion">Conclusion</a>
                </li>
              </ol>
            </div>

            {/* Section 1 */}
            <section id="purpose" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Purpose and Target
              </h2>

              <p>
                The primary objective of Zeus was to infect computers running
                the Windows operating system and secretly collect confidential
                information such as usernames, passwords, credit card details,
                and banking credentials. Unlike traditional viruses that focus
                on damaging systems, Zeus focused on financial theft and cyber
                espionage. It typically spread through phishing emails,
                malicious website links, infected attachments, and drive-by
                downloads. Once a victim opened a malicious attachment or
                visited a compromised website, Zeus silently installed itself on
                the computer without the user's knowledge. It cannot be
                removed/fixed through any Antivirus Security like Norton,McAfee,
                Webroot, Avast, Malwarebytes etc, However it can be cleaned one
                time by using tools and keys provided by companies such as
                Websphere, But for a permanent fixation it requires a Private IP
                Licence Key & Firewall to remove and secure it.
              </p>
            </section>

            <section id="printer-impact" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Impact on Printer Functionality
              </h2>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-md">
                <p>
                  A Zeus (Zbot) malware infection can indirectly affect printer
                  functionality by corrupting printer driver files or Printer
                  Spooler components, causing the Print Spooler service to stop
                  unexpectedly, blocking driver installation or updates,
                  disabling printing-related services, and altering network or
                  firewall settings that prevent communication with network
                  printers.
                </p>

                <p className="mt-4">
                  In some cases, Zeus may also download additional malware that
                  further damages system stability, leading to symptoms such as
                  printers appearing offline, missing or unavailable drivers,
                  repeated Print Spooler crashes, failed driver installations,
                  and print jobs remaining stuck in the queue or never printing.
                </p>
              </div>
            </section>

            <section id="keyfeatures" className="mb-12">
              <h2 className="text-3xl font-serif border-b mb-6 pb-2">
                Key Features
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Keylogging",
                  "Form Grabbing",
                  "Credential Theft",
                  "Botnet Communication",
                  "Remote Control",
                  "Malware Distribution",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="border bg-gray-50 p-5 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold">{feature}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 */}
            <section id="stealing" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                How Zeus Stole Information
              </h2>

              <p>
                After infection, Zeus employed sophisticated techniques to steal
                information. It used keylogging, which records every keystroke
                typed by the user, allowing attackers to capture usernames and
                passwords. It also utilized form grabbing, a technique that
                intercepts information entered into web forms before it is
                encrypted and sent to a website. This made Zeus particularly
                effective against online banking systems because it could steal
                credentials even when secure HTTPS connections were used.
              </p>
            </section>

            {/* Section 3 */}
            <section id="botnet" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Botnet Architecture
              </h2>

              <p>
                A key feature of Zeus was its ability to connect infected
                computers to a botnet. A botnet is a network of compromised
                devices controlled remotely by cybercriminals through
                command-and-control (C&C) servers. Once part of the botnet,
                infected machines could receive instructions from attackers,
                send stolen data, download additional malware, or participate in
                large-scale cyberattacks.
              </p>

              <div className="border bg-gray-50 p-6 my-6">
                <img
                  src="/architecture.png"
                  alt="Zeus Botnet Architecture"
                  className="w-full"
                />

                <p className="text-sm text-center text-gray-600 mt-3">
                  Figure 1: Simplified Zeus botnet architecture showing the flow
                  of stolen credentials from infected systems to
                  command-and-control servers.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="incidents" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Major Incidents and Variants
              </h2>

              <p>
                Zeus gained worldwide attention due to several major cybercrime
                operations. By 2009, millions of computers had been infected
                globally. In 2010, authorities uncovered a Zeus-based criminal
                network that had stolen tens of millions of dollars from bank
                accounts belonging to individuals, businesses, and government
                organizations. The malware's source code was leaked in 2011,
                leading to the creation of numerous variants and successors.
              </p>

              <p className="mt-4">
                One of the most dangerous descendants was GameOver ZeuS, which
                replaced centralized command servers with a peer-to-peer
                communication system. This made it more resilient against law
                enforcement takedowns. GameOver ZeuS was also used to distribute
                ransomware, including CryptoLocker, which encrypted victims'
                files and demanded payment for decryption.
              </p>
            </section>

            <section id="timeline" className="mb-12">
              <h2 className="text-3xl font-serif border-b mb-6 pb-2">
                Timeline
              </h2>

              <div className="border rounded-md overflow-hidden">
                {[
                  {
                    year: "2007",
                    title: "Zeus First Discovered",
                    description:
                      "Zeus emerged as a banking Trojan designed to steal online banking credentials and financial information from Windows systems.",
                  },
                  {
                    year: "2009",
                    title: "Worldwide Infections",
                    description:
                      "Millions of computers became infected globally, making Zeus one of the most widespread banking malware campaigns.",
                  },
                  {
                    year: "2010",
                    title: "Financial Fraud Network Exposed",
                    description:
                      "Authorities uncovered a Zeus-based criminal operation responsible for stealing tens of millions of dollars.",
                  },
                  {
                    year: "2011",
                    title: "Source Code Leak",
                    description:
                      "The Zeus source code was leaked publicly, leading to the development of numerous variants and successors.",
                  },
                  {
                    year: "2014",
                    title: "GameOver Zeus Disrupted",
                    description:
                      "International law enforcement agencies disrupted parts of the GameOver Zeus botnet infrastructure.",
                  },
                ].map((event, index) => (
                  <div
                    key={event.year}
                    className={`grid md:grid-cols-[120px_1fr] ${
                      index !== 4 ? "border-b" : ""
                    }`}
                  >
                    <div className="bg-gray-50 p-5 font-semibold text-gray-800 border-r">
                      {event.year}
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-1">
                        {event.title}
                      </h3>

                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section id="impact" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Impact on Cybersecurity
              </h2>

              <p>
                The impact of Zeus on cybersecurity was significant. It
                demonstrated how organized cybercriminal groups could use
                malware to conduct large-scale financial fraud. Security
                researchers and law enforcement agencies around the world
                collaborated to disrupt Zeus infrastructure and arrest members
                of cybercrime gangs. Despite these efforts, many Zeus variants
                continue to influence modern banking Trojans.
              </p>
            </section>

            {/* Section 6 */}
            <section id="protection" className="mb-10">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Protection and Prevention
              </h2>

              <p>
                To protect against threats like Zeus, users should maintain
                updated antivirus software, regularly install security patches,
                avoid opening suspicious email attachments, enable multi-factor
                authentication, and verify the legitimacy of websites before
                entering sensitive information.
              </p>

              <div className="mt-6 border bg-gray-50 p-5">
                <h3 className="font-semibold text-lg mb-3">
                  Recommended Security Practices
                </h3>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Keep operating systems and software updated.</li>
                  <li>
                    Use reputable antivirus and endpoint protection solutions.
                  </li>
                  <li>Enable multi-factor authentication whenever possible.</li>
                  <li>Avoid opening suspicious email attachments and links.</li>
                  <li>Regularly monitor financial and online accounts.</li>
                  <li>
                    Verify website authenticity before entering credentials.
                  </li>
                  <li>Perform routine data backups.</li>
                  <li>Participate in cybersecurity awareness training.</li>
                </ul>
              </div>
            </section>

            
            {/* Conclusion */}
            <section id="conclusion">
              <h2 className="text-3xl font-serif border-b mb-4 pb-2">
                Conclusion
              </h2>

              <p>
                Zeus remains one of the most influential banking Trojans ever
                created. Its advanced credential-stealing capabilities, botnet
                architecture, and financial impact reshaped the cybersecurity
                landscape and inspired many modern malware families. It serves
                as a classic example of how cybercriminals exploit technology
                for financial gain and why strong cybersecurity practices are
                essential in the digital age.
              </p>
            </section>

            <section className="mb-12 py-10">
              <h2 className="text-3xl font-serif border-b mb-6 pb-2">
                Related Malware
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "GameOver Zeus",
                  "CryptoLocker",
                  "SpyEye",
                  "Dridex",
                  "Emotet",
                  "TrickBot",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-blue-50 border rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </article>

          {/* Wikipedia Infobox */}
          <aside className="w-full lg:w-80 mt-2">
            <div className="border border-gray-400 bg-gray-50">
              <div className="bg-gray-200 text-center font-bold py-3 border-b">
                Zeus (Zbot)
              </div>

              <div className="p-4">
                <img
                  src="/zeusbotnet.png"
                  alt="Zeus Malware"
                  className="w-full mb-4 border"
                />

                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="font-semibold py-2">Malware Type</td>
                      <td>Banking Trojan</td>
                    </tr>

                    <tr className="border-b">
                      <td className="font-semibold py-2">Also Known As</td>
                      <td>Zbot</td>
                    </tr>

                    <tr className="border-b">
                      <td className="font-semibold py-2">First Detected</td>
                      <td>2007</td>
                    </tr>

                    <tr className="border-b">
                      <td className="font-semibold py-2">Primary Target</td>
                      <td>Windows Systems</td>
                    </tr>

                    <tr className="border-b">
                      <td className="font-semibold py-2">Main Purpose</td>
                      <td>Credential Theft</td>
                    </tr>

                    <tr className="border-b">
                      <td className="font-semibold py-2">Techniques</td>
                      <td>
                        Keylogging,
                        <br />
                        Form Grabbing
                      </td>
                    </tr>

                    <tr>
                      <td className="font-semibold py-2">Related Variant</td>
                      <td>GameOver ZeuS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
