import type React from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Building,
  Award,
  CheckCircle,
  Play,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const jobCategories = [
  {
    title: "Work from Home",
    icon: "🏠",
    activeJobs: 77,
    isNew: true,
    link: "/jobs/work-from-home",
  },
  {
    title: "Accountant",
    icon: "💼",
    activeJobs: 984,
    link: "/jobs/accountant",
  },
  {
    title: "BPO / Customer care",
    icon: "🎧",
    activeJobs: 2948,
    link: "/jobs/bpo-customer-care",
  },
  {
    title: "Data Entry / Back Office",
    icon: "💻",
    activeJobs: 2616,
    link: "/jobs/data-entry",
  },
  {
    title: "Sales / Marketing",
    icon: "📈",
    activeJobs: 839,
    link: "/jobs/sales-marketing",
  },
  {
    title: "IT Software Engineer",
    icon: "⚙️",
    activeJobs: 839,
    isNew: true,
    link: "/jobs/it-software",
  },
  {
    title: "Retail / Store Executive",
    icon: "🏪",
    activeJobs: 47,
    isNew: true,
    link: "/jobs/retail",
  },
  {
    title: "Hospitality Executives",
    icon: "🏨",
    activeJobs: 26,
    link: "/jobs/hospitality",
  },
];

const JobCard: React.FC<{
  title: string;
  icon: string;
  activeJobs: number;
  isNew?: boolean;
  onClick: () => void;
}> = ({ title, icon, activeJobs, isNew, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="text-3xl">{icon}</span>
      {isNew && (
        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
          New
        </span>
      )}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="flex items-center justify-between">
      <span className="text-blue-600 font-medium">
        {activeJobs} Active Jobs
      </span>
      <ExternalLink className="h-4 w-4 text-gray-400" />
    </div>
  </div>
);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const JobCategories = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Job Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore thousands of job opportunities with all the information you
            need. It's your future.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobCategories.map((job, index) => (
            <JobCard key={index} {...job} onClick={() => navigate(job.link)} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/jobs")}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <span>View All Jobs</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Bridging Education and Industry
            </h1>
            <p className="text-xl mb-8">
              Empowering the future through innovative education and industry
              collaboration
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-blue-600" />}
              title="Educational Programs"
              description="Comprehensive B.Voc and D.Voc programs designed to meet industry demands"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Industry Partnerships"
              description="Strong collaborations with leading institutions and companies"
            />
            <FeatureCard
              icon={<Building className="h-8 w-8 text-blue-600" />}
              title="Job Seva Portal"
              description="Connecting talented individuals with promising career opportunities"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard number="1000+" label="Students Trained" />
            <StatCard number="50+" label="Industry Partners" />
            <StatCard number="95%" label="Placement Rate" />
            <StatCard number="100+" label="Courses Offered" />
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <JobCategories />

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Impact in Action</h2>
              <p className="text-gray-600 text-lg">
                Watch how Univoc Foundation is revolutionizing vocational
                education and creating opportunities for students across the
                globe.
              </p>
              <div className="flex flex-col gap-4">
                <FeaturePoint
                  icon={<CheckCircle className="h-5 w-5 text-blue-500" />}
                  text="1000+ Students Trained Successfully"
                />
                <FeaturePoint
                  icon={<CheckCircle className="h-5 w-5 text-blue-500" />}
                  text="95% Placement Rate"
                />
                <FeaturePoint
                  icon={<CheckCircle className="h-5 w-5 text-blue-500" />}
                  text="50+ Industry Partnerships"
                />
              </div>
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/AF5gmv-Ls_Y?autoplay=1"
                title="Univoc Impact Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Mr. Azeem Faisal"
              role="Industry Expert"
              content="The innovative approach to education and industry collaboration at Univoc Foundation is truly commendable."
            />
            <TestimonialCard
              name="Mr. Arjun Mishra"
              role="Professional"
              content="Univoc's commitment to bridging the gap between academia and industry sets them apart."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="text-center p-8 bg-white shadow-lg rounded-xl">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatCard: React.FC<{ number: string; label: string }> = ({
  number,
  label,
}) => (
  <div className="bg-white p-8 rounded-lg shadow-xl">
    <h3 className="text-4xl font-semibold text-blue-600">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const FeaturePoint: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-3 text-gray-600">
    {icon}
    <p>{text}</p>
  </div>
);

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  content: string;
}> = ({ name, role, content }) => (
  <div className="bg-white p-8 shadow-lg rounded-lg">
    <p className="text-gray-600">{content}</p>
    <h4 className="text-lg font-semibold text-gray-800 mt-4">{name}</h4>
    <p className="text-gray-500">{role}</p>
  </div>
);

export default Home;
