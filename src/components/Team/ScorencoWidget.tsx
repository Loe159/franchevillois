import { useEffect } from 'react';

const ScorencoWidget = ({ id }) => {
    useEffect(() => {
        let script1, script2;

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                script1 = document.createElement('script');
                script1.src = src;
                script1.async = true;
                script1.onload = resolve;
                script1.onerror = reject;
                document.body.appendChild(script1);
            });
        };

        const addScript = (innerHTML) => {
            script2 = document.createElement('script');
            script2.innerHTML = innerHTML;
            document.body.appendChild(script2);
        };

        loadScript('https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js')
            .then(() => {
                addScript(`
          if (!window._rsz) {
            window._rsz = function() {
              var i = iFrameResize({ checkOrigin: false, interval: 100 });
            };
            if (document.readyState != "loading") {
              _rsz();
            } else {
              document.addEventListener("DOMContentLoaded", _rsz);
            }
          }
        `);
            })
            .catch((err) => {
                console.error('Failed to load the iFrameResize script:', err);
            });

        // Clean up scripts when the component unmounts
        return () => {
            if (script1) document.body.removeChild(script1);
            if (script2) document.body.removeChild(script2);
        };
    }, []);

    return (
        <div>
            <iframe
                id={id}
                src={`https://v1.scorenco.com/widget/${id}/?auto_height=true`}
                style={{ display: 'block', width: '100%', overflow: 'auto', margin: 'auto', borderWidth: '0px' }}
                scrolling="no"
            ></iframe>
            <a
                style={{ fontSize: '11px' }}
                target="_blank"
                href={`https://v1.scorenco.com/football/clubs/${id}/`}
                rel="noopener noreferrer"
            >
                FC Franchevillois sur Score'n'co
            </a>
        </div>
    );
};

export default ScorencoWidget;
