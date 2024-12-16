const animations = {
  keyframes: {
    'text-focus-in': {
      '0%': {
        filter: 'blur(12px)',
        opacity: '0',
      },
      '100%': {
        filter: 'blur(0px)',
        opacity: '1',
      }
    },

    'flip-in-ver-left': {
          '0%': { transform: 'rotateY(80deg)', opacity: 0 },
          '100%': { transform: 'rotateY(0)', opacity: 1 },
    },
    
    'wobble-hor-top': {
      '0%, 100%': {
        transform: 'translateX(0%)',
        'transform-origin': '50% 50%'
      },
      '15%': {
        transform: 'translateX(-15px) rotate(4deg)'
      },
      '30%': {
        transform: 'translateX(5px) rotate(-4deg)'
      },
      '45%': {
        transform: 'translateX(-5px) rotate(3.4deg)'
      },
      '60%': {
        transform: 'translateX(3px) rotate(-2.4deg)'
      },
      '75%': {
        transform: 'translateX(-2px) rotate(1.2deg)',
      },
    },
    
  },
  animation: {
    'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
    'flip-in-ver-left': 'flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    'wobble-hor-top': 'wobble-hor-top 0.8s both',
  },
};

export default animations;
