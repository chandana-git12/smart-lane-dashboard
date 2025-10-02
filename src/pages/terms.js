import React from 'react';

const HaloTermsConditions = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.8',
      color: '#333',
      backgroundColor: '#ffffff',
      margin: 0,
      padding: 0
    },
    wrapper: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      paddingBottom: '30px',
      borderBottom: '2px solid #e0e0e0'
    },
    headerTitle: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      fontWeight: '700',
      color: '#000',
      margin: 0
    },
    headerSubtitle: {
      fontSize: '1rem',
      color: '#666',
      margin: '10px 0 0 0',
      fontWeight: '400'
    },
    section: {
      marginBottom: '35px'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      color: '#000',
      marginBottom: '15px',
      fontWeight: '600',
      marginTop: '30px'
    },
    subsectionTitle: {
      fontSize: '1.2rem',
      color: '#000',
      margin: '20px 0 12px 0',
      fontWeight: '600'
    },
    paragraph: {
      marginBottom: '15px',
      textAlign: 'justify',
      fontSize: '1rem',
      lineHeight: '1.8',
      color: '#444'
    },
    lastUpdated: {
      textAlign: 'center',
      color: '#666',
      fontStyle: 'italic',
      marginBottom: '40px',
      padding: '15px',
      border: '1px solid #e0e0e0',
      fontSize: '0.95rem'
    },
    importantBox: {
      padding: '20px',
      margin: '20px 0',
      border: '1px solid #d0d0d0',
      backgroundColor: '#fafafa',
      fontSize: '0.95rem'
    },
    contactSection: {
      marginTop: '50px',
      paddingTop: '30px',
      borderTop: '2px solid #e0e0e0',
      textAlign: 'center'
    },
    contactTitle: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      fontWeight: '600',
      color: '#000'
    },
    contactInfo: {
      marginBottom: '10px',
      fontSize: '1rem',
      color: '#555'
    }
  };

  const responsiveStyles = `
    @media (max-width: 768px) {
      .wrapper {
        padding: 30px 15px !important;
      }
      .header-title {
        font-size: 2rem !important;
      }
      .section-title {
        font-size: 1.3rem !important;
      }
      .subsection-title {
        font-size: 1.1rem !important;
      }
      .paragraph {
        text-align: left !important;
      }
    }

    @media (max-width: 480px) {
      .wrapper {
        padding: 20px 12px !important;
      }
      .header-title {
        font-size: 1.8rem !important;
      }
      .section-title {
        font-size: 1.2rem !important;
        margin-top: 25px !important;
      }
      .subsection-title {
        font-size: 1.05rem !important;
      }
      .paragraph {
        font-size: 0.95rem !important;
      }
      .important-box {
        padding: 15px !important;
        font-size: 0.9rem !important;
      }
      .contact-info {
        font-size: 0.95rem !important;
      }
    }

    @media (max-width: 360px) {
      .wrapper {
        padding: 15px 10px !important;
      }
      .header-title {
        font-size: 1.6rem !important;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{responsiveStyles}</style>
      
      <div style={styles.wrapper} className="wrapper">
        <header style={styles.header}>
          <h1 style={styles.headerTitle} className="header-title">Terms and Conditions</h1>
          <p style={styles.headerSubtitle}>Halo Technologies</p>
          <p style={styles.headerSubtitle}>Solar Energy Solutions</p>
        </header>

        <div style={styles.lastUpdated}>
          Last Updated: January 2025
        </div>

        <section style={styles.section}>
          <p style={styles.paragraph} className="paragraph">
            Carefully read these Terms and Conditions before using this website or engaging with our services. Your access to and use of the website, along with any purchase of our solar products and services, is conditioned upon your acceptance of and compliance with these terms in full. If you do not accept these terms, you should leave the website immediately and cease any further use of any content, materials, products, or services you have obtained from Halo Technologies.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Introduction and Agreement</h2>
          <p style={styles.paragraph} className="paragraph">
            These Terms and Conditions constitute a legally binding agreement between you, the customer, and Halo Technologies regarding the purchase, installation, maintenance, and use of solar energy systems and related services. By signing a service agreement, making a deposit, proceeding with installation, or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms. Halo Technologies reserves the right to modify these terms at any time, and such modifications will be effective immediately upon posting on our website.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Services and Products</h2>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies specializes in providing comprehensive solar energy solutions including on-grid solar systems that connect to utility grids with net metering capability, off-grid solar systems that operate independently with battery backup for complete energy independence, and hybrid solar systems that combine the benefits of both grid connectivity and battery storage. Our services also encompass solar water heating systems, comprehensive maintenance and repair services including system monitoring and cleaning, energy audits with detailed site assessments, and consultation services for optimal solar system design and implementation.
          </p>
          <p style={styles.paragraph} className="paragraph">
            Each installation is customized based on the specific requirements of the customer's property, energy consumption patterns, and available roof or ground space. Our team conducts thorough site surveys to determine the most suitable system configuration, taking into account factors such as structural integrity, shading analysis, electrical infrastructure, and local regulations. We use only high-quality solar panels, inverters, mounting structures, and other components from reputable manufacturers to ensure long-term reliability and optimal performance.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Intellectual Property Rights</h2>
          <p style={styles.paragraph} className="paragraph">
            All intellectual property rights of the content on this website including but not limited to text, photographs, designs, technical drawings, system designs, proprietary software, monitoring platforms, and images vest with Halo Technologies unless otherwise indicated. Halo Technologies' intellectual property rights are protected by Indian copyright laws, trademark laws, and international treaties. Except as expressly permitted by this website or applicable laws, other uses of the content including but not limited to duplication, distribution, re-posting, sending, deleting, editing, or adapting are strictly prohibited.
          </p>
          <p style={styles.paragraph} className="paragraph">
            No publication or commercial use of the content is permitted without the prior written permission of Halo Technologies. No part of the content shall be made available as part of another website. This website and the content shall not be stored in whole or in part in a database of any kind or used to construct a database or to distribute a database containing this website or the content. The Halo Technologies name, logo, and all related product and service names, design marks, and slogans are the trademarks or service marks of Halo Technologies. You are not authorized to use any of these marks without the prior written consent of Halo Technologies.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Installation Process and Timeline</h2>
          
          <h3 style={styles.subsectionTitle} className="subsection-title">Site Assessment and Survey</h3>
          <p style={styles.paragraph} className="paragraph">
            Before proceeding with any installation, our qualified technical team will conduct a comprehensive site survey and assessment. This assessment includes evaluating the structural integrity of the roof or proposed installation area, analyzing potential shading from nearby trees or buildings throughout different seasons, assessing the electrical infrastructure and capacity, determining optimal panel placement and tilt angles, and calculating expected energy generation based on location-specific solar irradiation data. The customer must provide accurate information about the property and ensure that our team has safe and unobstructed access to all relevant areas of the site.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Installation Timeline and Schedule</h3>
          <p style={styles.paragraph} className="paragraph">
            The installation timeline varies depending on the size and complexity of the system. Typical residential installations are completed within three to seven working days from the commencement of on-site work. Commercial and industrial installations may require longer timelines, which will be communicated in the quotation and agreement. The actual timeline depends on various factors including weather conditions, availability of necessary permits and approvals from local authorities, grid connection approvals from the electricity distribution company, and the complexity of electrical work required. Delays may occur due to circumstances beyond our control, and Halo Technologies will make reasonable efforts to communicate any changes to the schedule promptly.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Permits and Regulatory Approvals</h3>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies will assist customers in obtaining necessary permits and approvals from relevant authorities including electrical safety clearances, structural stability certificates where required, and net metering approvals from the local electricity distribution company. However, the final approval and processing timelines are subject to the policies and procedures of these authorities and are beyond our direct control. The customer agrees to cooperate fully in providing all required documentation, property ownership proofs, identity documents, and any other information requested by authorities. Installation work will commence only after obtaining all mandatory clearances and approvals.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Pricing, Payment Terms, and Financial Arrangements</h2>
          
          <h3 style={styles.subsectionTitle} className="subsection-title">Quotation and Price Validity</h3>
          <p style={styles.paragraph} className="paragraph">
            All quotations provided by Halo Technologies are valid for a period of thirty days from the date of issue. Prices quoted are based on current market rates for materials, prevailing government policies, applicable taxes, and labor costs. Halo Technologies reserves the right to revise quotations if there are significant changes in any of these factors, including modifications to goods and services tax rates, changes in customs duties on imported components, fluctuations in raw material costs, or revisions to government subsidy schemes. Any changes to the quoted price will be communicated to the customer before proceeding with the order.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Payment Schedule and Terms</h3>
          <p style={styles.paragraph} className="paragraph">
            The standard payment terms require an advance payment of thirty to forty percent of the total project cost at the time of order confirmation to secure materials and schedule installation. A second payment of forty to fifty percent is due before or during the installation phase to cover labor, equipment, and ongoing work. The final payment of ten to twenty percent is payable after successful commissioning of the system, completion of all testing, handover of documentation including warranty certificates and operation manuals, and demonstration of system operation. All payments should be made through bank transfer, cheque, or other agreed-upon payment methods. Cash payments above statutory limits are not accepted as per applicable regulations.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Financing and Loan Arrangements</h3>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies has partnerships with various financial institutions that offer solar loan products to facilitate customer purchases. These financing options may include competitive interest rates, flexible repayment tenures, and minimal documentation requirements. However, the terms and conditions of such financing are governed entirely by the respective lending institutions, and loan approval is subject to the financial institution's credit assessment and policies. Halo Technologies acts only as a facilitator in connecting customers with financing options and assumes no responsibility or liability regarding loan approvals, interest rates, repayment terms, or any disputes arising from the financing arrangement.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Government Subsidies and Incentives</h3>
          <p style={styles.paragraph} className="paragraph">
            Where applicable under central or state government schemes, Halo Technologies will provide assistance in applying for available subsidies and incentives. This includes schemes such as the PM-KUSUM program, state-specific solar incentive programs, and capital subsidy schemes for residential and agricultural solar installations. Our team will help prepare and submit the necessary documentation to the nodal agencies. However, subsidy approval, processing timelines, and disbursement are entirely at the discretion of government authorities and their designated agencies. Halo Technologies cannot guarantee subsidy approval or be held responsible for delays or rejections in subsidy processing. The customer remains responsible for the full payment of the system cost regardless of subsidy status, and any approved subsidy amount will be adjusted or refunded as per the applicable scheme guidelines.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Product Warranties and Performance Guarantees</h2>
          
          <h3 style={styles.subsectionTitle} className="subsection-title">Solar Panel Warranties</h3>
          <p style={styles.paragraph} className="paragraph">
            Solar panels supplied and installed by Halo Technologies come with manufacturer warranties that typically include a product warranty covering manufacturing defects for a period of ten to twelve years, and a performance warranty guaranteeing that panels will maintain at least ninety percent of their rated output at ten years and at least eighty percent at twenty-five years under standard test conditions. These warranties are provided by the panel manufacturers and are governed by their terms and conditions. Halo Technologies will assist in processing warranty claims, but the ultimate responsibility for honoring warranty claims lies with the respective manufacturers.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Inverter and System Component Warranties</h3>
          <p style={styles.paragraph} className="paragraph">
            Inverters come with manufacturer warranties ranging from five to ten years depending on the brand and model selected. Battery systems, if included in the installation, carry warranties of three to ten years based on battery technology and manufacturer specifications. Other system components including mounting structures, cables, junction boxes, and safety devices are covered under standard manufacturer warranties. All warranties are subject to proper system operation, regular maintenance, and absence of unauthorized modifications or repairs.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Installation Workmanship Warranty</h3>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies provides a workmanship warranty covering the quality of installation for a period of five years from the date of commissioning. This warranty covers issues related to structural mounting, waterproofing of roof penetrations, electrical wiring and connections, proper grounding and earthing, and overall system integration. The workmanship warranty does not cover damage resulting from natural disasters, accidents, unauthorized modifications, improper maintenance, or normal wear and tear of system components.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Warranty Claims and Service</h3>
          <p style={styles.paragraph} className="paragraph">
            Any defects or performance issues must be reported to Halo Technologies within seven days of discovery. Warranty claims require proper documentation including photographs of the issue, system performance data if available, and a detailed description of the problem. Halo Technologies will inspect the system and determine the cause of the issue. If the problem is covered under warranty, necessary repairs or replacements will be arranged at no additional cost to the customer. Warranties do not cover damage from lightning strikes, floods, earthquakes, or other acts of nature, damage from grid voltage fluctuations beyond specified limits, unauthorized system modifications or repairs by third parties, or failure to perform recommended maintenance.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">System Performance and Energy Generation</h2>
          
          <h3 style={styles.subsectionTitle} className="subsection-title">Performance Estimates and Expectations</h3>
          <p style={styles.paragraph} className="paragraph">
            Energy generation estimates provided by Halo Technologies are based on standard industry calculation methods using average solar irradiation data for your location, system efficiency calculations, optimal tilt and orientation assumptions, and expected system losses. These estimates represent expected performance under normal operating conditions. Actual energy generation will vary from these estimates due to several factors including daily and seasonal variations in sunlight intensity, weather conditions such as cloud cover, rain, fog, and dust, shading from nearby structures or vegetation that may change over time, system cleanliness and maintenance, and grid availability for on-grid systems. Customers should understand that these estimates are not guaranteed outputs, and actual performance may be higher or lower than estimated values.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Factors Affecting Performance</h3>
          <p style={styles.paragraph} className="paragraph">
            Solar system performance is inherently dependent on environmental and operational factors. Dust accumulation on panels can reduce output by ten to thirty percent if not cleaned regularly. Partial shading even on a small portion of the array can significantly impact overall generation. Extreme temperatures can affect panel efficiency with very high ambient temperatures causing temporary reduction in output. The customer is responsible for ensuring that panels remain clean and free from obstructions, and that surrounding vegetation is trimmed to prevent shading.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">No Guarantee of Financial Savings</h3>
          <p style={styles.paragraph} className="paragraph">
            While Halo Technologies provides estimates of potential electricity bill savings based on current tariff rates, consumption patterns, and projected system output, we cannot and do not guarantee specific monetary savings. Actual savings depend on future electricity tariff changes which are determined by regulatory authorities, changes in your consumption patterns and load profile, system performance which varies with weather and maintenance, and policies regarding net metering and feed-in tariffs which may be modified by authorities. The economic viability of solar installations is subject to these variable factors, and customers should make their investment decision understanding this inherent uncertainty.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Customer Obligations and Responsibilities</h2>
          <p style={styles.paragraph} className="paragraph">
            The customer acknowledges and agrees to fulfill certain responsibilities to ensure safe and optimal operation of the solar system. The customer must ensure that the roof or installation structure is capable of supporting the weight of the solar system including panels, mounting structures, and any additional equipment. If there is any doubt about structural adequacy, the customer should arrange for a structural engineer's assessment before installation. The customer must provide safe, unobstructed, and timely access to the installation site for our technical team during installation, commissioning, and any subsequent maintenance or service visits.
          </p>
          <p style={styles.paragraph} className="paragraph">
            The customer is responsible for maintaining clear space around the solar panels and ensuring that no new structures, extensions, or vegetation growth causes shading on the panels. Regular cleaning of panels is essential for maintaining optimal performance, and customers should arrange for panel cleaning at intervals recommended by Halo Technologies, typically every three to six months depending on local dust and pollution levels. The customer must monitor system performance through any provided monitoring interface and promptly report any significant drops in generation or system errors to Halo Technologies.
          </p>
          <p style={styles.paragraph} className="paragraph">
            Customers must not attempt to modify, repair, or tamper with the solar system or any of its components without prior authorization from Halo Technologies. Any unauthorized modifications will void warranties and may create safety hazards. The customer should maintain adequate property insurance that covers the solar installation, and should inform their insurance provider about the installation. The customer must comply with any maintenance schedules and recommendations provided by Halo Technologies to ensure continued warranty coverage and optimal system performance.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Maintenance and Support Services</h2>
          
          <h3 style={styles.subsectionTitle} className="subsection-title">Annual Maintenance Contracts</h3>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies offers optional Annual Maintenance Contract packages designed to ensure continued optimal performance of your solar system. These AMC packages include periodic system inspections to check all electrical connections, mounting structure integrity, and component functionality, professional cleaning of solar panels to remove dust, bird droppings, and other debris that reduces efficiency, performance monitoring and analysis to identify any declining trends or issues, priority service response for any problems or breakdowns, and preventive maintenance to address minor issues before they become major problems. AMC terms, coverage details, and pricing are provided in separate documentation.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Service Response and Support</h3>
          <p style={styles.paragraph} className="paragraph">
            For customers with active AMC or warranty coverage, Halo Technologies commits to responding to service requests within defined timeframes. Emergency issues affecting system safety or causing complete system shutdown will be addressed within twenty-four to forty-eight hours of notification. Non-critical issues such as partial output reduction or minor faults will be addressed within three to seven working days. Routine maintenance visits are scheduled as per AMC terms. Response times may be longer in remote locations or during periods of extremely high service demand. Customers can reach our service team through email, phone, or our online service portal.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Cancellation and Refund Policy</h2>
          
          <h3 style={styles.subsectionTitle} className="subsection-title">Customer-Initiated Cancellation</h3>
          <p style={styles.paragraph} className="paragraph">
            If the customer decides to cancel the order before installation work has commenced on-site, they are entitled to a refund of eighty percent of the advance payment made, with twenty percent retained by Halo Technologies to cover administrative costs, design work, permit application fees, and material procurement or cancellation charges. If cancellation occurs after installation has begun but before completion, the refund will be calculated based on the work completed, materials installed, labor costs incurred, and any materials specifically procured for the project that cannot be returned or reused. After the system has been installed and commissioned, no refund will be provided, and any issues will be addressed through warranty claims or service agreements.
          </p>

          <h3 style={styles.subsectionTitle} className="subsection-title">Company-Initiated Cancellation</h3>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies reserves the right to cancel an order and refund all payments if site conditions are determined to be unsuitable for solar installation after detailed assessment, necessary permits or approvals cannot be obtained despite reasonable efforts, the customer has provided false or misleading information about property ownership or other material facts, or if there are genuine technical or safety concerns that cannot be adequately addressed. In such cases of company-initiated cancellation, a full refund of all payments made will be provided to the customer within a reasonable timeframe.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Limitation of Liability</h2>
          <p style={styles.paragraph} className="paragraph">
            The liability of Halo Technologies is limited to the warranty terms and conditions explicitly provided with products and services. Halo Technologies shall not be liable for any indirect, incidental, consequential, or special damages including but not limited to loss of revenue or income, loss of expected energy savings, business interruption costs, or any other economic losses arising from system performance, downtime, or failure. Our maximum liability under any circumstances shall not exceed the total amount paid by the customer for the specific solar system or service in question.
          </p>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies is not responsible for damages caused by natural disasters including lightning strikes, storms, cyclones, earthquakes, floods, or other acts of nature, failure or fluctuations of the electrical grid operated by the utility company, unauthorized modifications or repairs by the customer or third parties, failure to perform recommended maintenance, or normal wear and tear of components over time. The customer acknowledges that solar energy systems involve electrical components operating at high voltages and agrees to assume all risks associated with system ownership and operation beyond those explicitly covered by warranties.
          </p>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies makes no warranties or representations regarding future changes in government policies affecting net metering, feed-in tariffs, subsidies, or other incentives that may impact the economic returns of the solar investment. Changes in electricity tariff structures, introduction of grid connectivity charges, or modifications to renewable energy policies are matters beyond our control and do not constitute grounds for claims against Halo Technologies.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Force Majeure</h2>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies shall not be held responsible for delays in performance or non-performance of obligations under these terms due to circumstances beyond our reasonable control. Such force majeure events include natural disasters, pandemics or epidemics, government-imposed restrictions or lockdowns, war or civil unrest, strikes or labor disputes affecting our operations or supply chain, severe and unexpected shortages of materials or components, failure of transportation systems, or any other events that could not be reasonably anticipated or prevented. In the event of force majeure, Halo Technologies will make reasonable efforts to minimize delays and will communicate with affected customers regarding revised timelines.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Safety and Regulatory Compliance</h2>
          <p style={styles.paragraph} className="paragraph">
            All solar installations by Halo Technologies are designed and executed in compliance with relevant Indian standards including IS/IEC standards for solar photovoltaic systems, Central Electricity Authority regulations, state electricity board technical specifications, and local building codes and regulations. Our installations incorporate necessary safety features including proper system earthing and grounding, appropriate circuit breakers and disconnect switches, surge protection devices to protect against voltage spikes, emergency shutdown mechanisms, and fire safety measures where required.
          </p>
          <p style={styles.paragraph} className="paragraph">
            Customers are strictly cautioned that solar systems generate high DC voltage which can be dangerous if handled improperly. Only qualified and authorized technicians should perform any service, repair, or modification work on the system. Customers must never attempt to open inverters, junction boxes, or other electrical enclosures, never touch or try to repair damaged cables or connections, never spray water directly on inverters or electrical components, and never bypass or disable safety features. Any violation of safety guidelines or unauthorized work on the system will void all warranties and may create serious safety hazards.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Data Privacy and System Monitoring</h2>
          <p style={styles.paragraph} className="paragraph">
            Many modern solar systems include remote monitoring capabilities that collect data about system performance, energy generation, consumption patterns, and component status. If your system includes such monitoring features, Halo Technologies may collect and analyze this data to provide better service, identify potential issues proactively, and optimize system performance. This data is used solely for technical support, maintenance planning, and service improvement purposes. We do not share customer data with third parties except where required by law or where necessary to fulfill service obligations such as processing warranty claims with manufacturers. Customers who object to data collection may opt out of monitoring services, understanding that this may impact our ability to provide proactive service and remote diagnostics.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Disclaimer of Warranties</h2>
          <p style={styles.paragraph} className="paragraph">
            The information contained on this website is provided to you for your informational purposes only, without any representation or warranty of accuracy or completeness of information or other warranty of any kind including but not limited to any implied warranty of quality, merchantability, fitness for a particular purpose, or non-infringement. In no event will Halo Technologies be liable to any party for any direct, indirect, incidental, special, or consequential damages for use of this website or reliance upon any information or material accessed via this website or any other hyperlinked website including but not limited to damages arising from loss of profits, business interruption, or loss of data, even if Halo Technologies is expressly advised about the possibility of such damages, to the fullest extent allowable by law.
          </p>
          <p style={styles.paragraph} className="paragraph">
            The material on this website could contain technical inaccuracies or typographical errors, and information will be changed, updated, and deleted without notice. Halo Technologies may make improvements and changes in the products and programs described in this material at any time without obligation to notify users. Halo Technologies makes no warranties that this website will operate uninterrupted or error-free or that defects will be corrected. We do not warrant that this website is compatible with your computer equipment or that this website or its server is free of errors, viruses, worms, or trojans, and we shall not be liable for any damage you may suffer as a result of such issues.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">User Conduct and Website Usage</h2>
          <p style={styles.paragraph} className="paragraph">
            When registering on our website or using any of our online services, you agree to provide accurate, current, and complete information as prompted by registration forms including your email address, phone number, and other contact details. You agree to maintain and update this information to keep it accurate and current. If any information provided by you is untrue, inaccurate, not current, or incomplete, Halo Technologies reserves the right to terminate your account and your use of the website.
          </p>
          <p style={styles.paragraph} className="paragraph">
            If you are assigned a username and password, you are entirely responsible for maintaining the confidentiality of your credentials and for all activities that occur through your account. You must immediately notify Halo Technologies if you believe your account security has been compromised. While using the website, you agree not to restrict or inhibit any other visitor from using the website, use the site for any unlawful purpose, transmit any content that is unlawful, fraudulent, threatening, abusive, defamatory, or obscene, transmit any viruses or harmful code, modify or reverse engineer any portion of the site, or remove any copyright or proprietary notices from the website or content.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Confidentiality and Information Submission</h2>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies does not want to receive confidential or proprietary information from you through this website unless you have a separate written agreement with Halo Technologies related to the sharing of such information. Any information that Halo Technologies receives through its website is deemed to be non-confidential. By transmitting information to Halo Technologies via this website or through electronic means without a separate written agreement, you understand and agree that Halo Technologies may use that information for any purpose whatsoever without any obligation to you, except as required under applicable privacy laws.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Dispute Resolution and Governing Law</h2>
          <p style={styles.paragraph} className="paragraph">
            In case of any disputes, disagreements, or claims arising from these terms or from any solar system installation or service provided by Halo Technologies, the parties agree to first attempt resolution through good-faith negotiations and direct communication with our customer service team. If the dispute cannot be resolved through mutual discussion, either party may pursue resolution through arbitration in accordance with the Indian Arbitration and Conciliation Act of 1996. The arbitration shall be conducted in English language, and the venue shall be in the city where Halo Technologies' registered office is located unless otherwise agreed by both parties.
          </p>
          <p style={styles.paragraph} className="paragraph">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Subject to the arbitration clause above, the courts in the city of Halo Technologies' registered office shall have exclusive jurisdiction over any disputes arising from these terms. The customer irrevocably submits to the jurisdiction of such courts and waives any objection to proceedings in such courts on the grounds of venue or on the grounds that proceedings have been brought in an inconvenient forum.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Amendments and Modifications</h2>
          <p style={styles.paragraph} className="paragraph">
            Halo Technologies reserves the right to modify, amend, or update these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on our website. It is the customer's responsibility to review these terms periodically. Continued use of our services or website after changes have been posted constitutes acceptance of the modified terms. For existing service agreements or installation contracts, the terms in effect at the time of contract signing will continue to govern that specific transaction unless both parties agree to amendments in writing.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle} className="section-title">Severability and Waiver</h2>
          <p style={styles.paragraph} className="paragraph">
            If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be severed from these terms, and the remaining provisions shall continue in full force and effect. The failure of Halo Technologies to enforce any right or provision of these terms shall not constitute a waiver of such right or provision unless acknowledged and agreed to in writing. No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
          </p>
        </section>

        <div style={styles.importantBox} className="important-box">
          <strong>Important Notice:</strong> By proceeding with any purchase, installation, or service from Halo Technologies, or by continuing to use our website, you acknowledge that you have read these Terms and Conditions in their entirety, understand all provisions, and agree to be legally bound by them. If you have any questions or concerns about these terms, please contact us before proceeding with any transaction.
        </div>

        <section style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Contact Information</h2>
          <p style={styles.contactInfo} className="contact-info">
            For questions, concerns, service requests, or any clarifications regarding these Terms and Conditions, please contact us:
          </p>
          <p style={styles.contactInfo} className="contact-info">
            <strong>Halo Technologies</strong>
          </p>
          <p style={styles.contactInfo} className="contact-info">
            Email: info@halotechnologies.com
          </p>
          <p style={styles.contactInfo} className="contact-info">
            Phone: +91 XXXXX XXXXX
          </p>
          <p style={styles.contactInfo} className="contact-info">
            Website: www.halotechnologies.com
          </p>
          <p style={styles.contactInfo} className="contact-info">
            Address: [Your City], [Your State], India
          </p>
        </section>
      </div>
    </div>
  );
};

export default HaloTermsConditions;