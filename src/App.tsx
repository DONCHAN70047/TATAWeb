import React from 'react';
import Header from './components/Header';
import InsuranceCard from './components/InsuranceCard';
import PdfUpload from './components/PdfUpload';
import ContactForm from './components/ContactForm';
import { insuranceTypes } from './data/insuranceTypes';
import { Shield, Users, Award, Clock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Insurance Solutions....
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Protect what matters most with our complete range of insurance services 
            Upload documents and get instant coverage verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-secondary bg-white text-black hover:bg-gray-300">
              Explore Services
            </a>
            <a href="#upload" className="btn-secondary bg-white text-black hover:bg-gray-300">
              Upload Documents
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose InsurancePro?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive insurance solutions with cutting-edge technology and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-400">Complete protection across all major insurance categories</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-400">24/7 customer service with experienced insurance professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Best Rates</h3>
              <p className="text-gray-400">Competitive premiums and flexible payment options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Processing</h3>
              <p className="text-gray-400">Quick document verification and claims processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
{/* Services Section */}
<section id="services" className="py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Our Insurance Services</h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Explore our comprehensive range of insurance products designed to protect you and your loved ones.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {insuranceTypes.map((insurance) => (
        <div
          key={insurance.id}
          className="group bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-primary-500 transition-all duration-300"
        >
          <div className="transition-transform duration-300 group-hover:scale-[1.02]">
            <InsuranceCard insurance={insurance} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* PDF Upload Section */}
      <section id="upload" className="py-16 bg-neutral-900">
        <PdfUpload />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InsurancePro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Protecting what matters most with comprehensive insurance solutions and exceptional customer service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Life Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Car Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Insurance</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Claims</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Document Upload</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>1-800-INSURANCE</p>
                <p>support@insurancepro.com</p>
                <p>123 Insurance Street<br />New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 InsurancePro. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
