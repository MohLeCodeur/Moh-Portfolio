import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-darker overflow-hidden">
      <div className="relative z-10">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center p-2">
              <img src="/mohagency.png" alt="MohAgency Logo" className="h-full w-full object-contain" loading="eager" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xl font-bold text-gradient font-heading">
            MohAgency
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Chargement...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loader
