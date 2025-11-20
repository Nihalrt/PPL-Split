import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Activity, Footprints, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Master the <span className="text-accent">PPL Split</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A simple, effective, and science-based approach to building muscle and strength by grouping exercises based on movement patterns.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/push" className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center gap-2">
            Start Push Day <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* The Concept */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
            <Dumbbell size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Push</h2>
          <p className="text-slate-600 leading-relaxed">
            Train "pushing" muscles: Chest, Shoulders, and Triceps. Movements involving pushing weight away from your body.
          </p>
          <Link to="/push" className="text-accent font-semibold mt-4 inline-block hover:underline">View Exercises &rarr;</Link>
        </div>

        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
            <Activity size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Pull</h2>
          <p className="text-slate-600 leading-relaxed">
            Train "pulling" muscles: Back and Biceps. Movements involving pulling weight towards your body.
          </p>
          <Link to="/pull" className="text-accent font-semibold mt-4 inline-block hover:underline">View Exercises &rarr;</Link>
        </div>

        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <Footprints size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Legs</h2>
          <p className="text-slate-600 leading-relaxed">
            Train the lower body: Quads, Hamstrings, Glutes, and Calves. The foundation of total body power.
          </p>
          <Link to="/legs" className="text-accent font-semibold mt-4 inline-block hover:underline">View Exercises &rarr;</Link>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-white rounded-2xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why this works?</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Recovery Management</h3>
                <p className="text-slate-600">
                    By splitting the body into three functional groups, you allow specific muscle groups 48-72 hours of rest before training them again, optimizing growth and preventing burnout.
                </p>
            </div>
            <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Simplicity (Cognitive Load)</h3>
                <p className="text-slate-600">
                    Instead of memorizing complex routines, you simply ask: "Am I pushing, pulling, or using legs?" This reduces mental fatigue and improves consistency.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;