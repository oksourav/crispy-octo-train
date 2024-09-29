import { useState } from "react";
import ContentEditable from "react-contenteditable";

function App() {
  const [editorState, setEditorState] = useState("");
  const [analysisScore, setAnalysisScore] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleChange = (evt: any) => {
    setEditorState(evt.target.value.trim());
  };

  const handleAnalysis = () => {
    setLoading(true);
    try {
      fetch("https://crispy-octo-train.onrender.com/detection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          text: editorState,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          setAnalysisScore(response.score);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen">
      <div className="h-[93%]">
        <div className="flex">
          <div className="flex-initial w-8/12 m-5">
            <div className="divide-y divide-solid">
              <div className="editor-control flex">
                <input
                  type="text"
                  name="document-name"
                  className="block max-w-96 py-1.5 pl-2 pr-5 text-gray-900 placeholder:text-gray-800 md:text-md sm:leading-6 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
                  placeholder="Untitled document"
                />
                {/* <div className="relative">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      ...
                    </button>
                  </div>
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        Download
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600"
                        role="menuitem"
                        id="menu-item-1"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="relative editor">
                <ContentEditable
                  className="editable my-4 py-3.5 pl-5 pr-5 text-gray-900 placeholder:text-gray-800 md:text-md sm:leading-6 focus:outline-none bg-gray-100 rounded-md"
                  tagName="pre"
                  html={editorState}
                  onChange={handleChange}
                />
                <div className="word-counter font-semibold absolute bottom-3 right-3 sm:text-sm">
                  {editorState.length}/1000
                </div>
                {/* <button className="upload absolute bottom-5 left-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <span>Upload a file</span>
                </button> */}
                {editorState.length > 0 && (
                  <button
                    className="upload absolute bottom-5 left-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    onClick={handleAnalysis}
                    disabled={loading}
                  >
                    <svg
                      enableBackground="new 0 0 32 32"
                      height="32px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="32px"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="search_magnifier_magnifying_glass_loupe">
                        <g id="search_funds_x2C__magnifying_glass_x2C__magnifier_x2C__loupe_1_">
                          <g id="analysis_2_">
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="M23.586,23.586c0.122-0.122,0.262-0.217,0.408-0.299l-2.276-2.277c-0.195-0.195-0.512-0.195-0.707,0        c-0.195,0.196-0.195,0.512,0,0.708l2.271,2.271C23.368,23.846,23.464,23.707,23.586,23.586z"
                                    fill="#fff"
                                  />
                                  <path
                                    d="M28.5,31c-0.667,0-1.295-0.26-1.768-0.732l-3.5-3.5C22.76,26.295,22.5,25.668,22.5,25        s0.26-1.295,0.732-1.768c0.906-0.906,2.629-0.906,3.535,0l3.5,3.5C30.74,27.205,31,27.832,31,28.5s-0.26,1.295-0.732,1.768        S29.167,31,28.5,31z M25,23.52c-0.407,0-0.793,0.152-1.061,0.42C23.656,24.223,23.5,24.6,23.5,25s0.156,0.777,0.439,1.061        l3.5,3.5c0.567,0.566,1.554,0.566,2.121,0C29.844,29.277,30,28.9,30,28.5s-0.156-0.777-0.439-1.061l-3.5-3.5        C25.793,23.672,25.407,23.52,25,23.52z"
                                    fill="#fff"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="M13,22.45c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c3.767,0,7.035-2.404,8.133-5.981        c0.081-0.264,0.361-0.415,0.625-0.331c0.264,0.081,0.413,0.36,0.332,0.624C20.861,19.763,17.209,22.45,13,22.45z"
                                    fill="#fff"
                                  />
                                </g>
                                <path
                                  d="M13,25C6.383,25,1,19.617,1,13S6.383,1,13,1s12,5.383,12,12S19.617,25,13,25z M13,2       C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <circle cx="22" cy="13" fill="#fff" r="0.5" />
                      </g>
                    </svg>
                    <span className="ml-3">Analyze Text</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex-initial w-4/12 m-5">
            {analysisScore ? (
              <div className="flex flex-col h-full w-full items-center justify-center">
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <>
                    <h1 className="text-3xl">Results:</h1>
                    <div
                      className="progress"
                      id="progress_main_id"
                      style={{ width: "100%", height: "32px", margin: "10px" }}
                    >
                      <div
                        className="progress-bar bg-success"
                        id="progress_sub_ids"
                        style={{ width: `${parseInt(analysisScore)}%` }}
                      >
                        {`Human: ${parseInt(analysisScore)}%`}
                      </div>
                      <div
                        className="progress-bar bg-danger progress-bar-stripped"
                        id="progress_sub_idf"
                        style={{ width: `${100 - parseInt(analysisScore)}%` }}
                      >
                        {`AI: ${100 - parseInt(analysisScore)}%`}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col h-full items-center justify-center">
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  <>
                    <img
                      src="../empty-stats.jpg"
                      className="w-48 h-48"
                      alt=""
                    />
                    <h2 className="text-xl font-semibold">Enter/Upload Text</h2>
                    <p className="w-4/6 my-4 text-center">
                      We will show you if your sentence generated using AI.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
