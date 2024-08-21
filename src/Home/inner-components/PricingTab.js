import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [activeTab, setActiveTab] = useState(propTabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="pricing-tab">
        <div className="pricing-inner-wrapper">
          <div
            className={classNames(
              "flxbtncard px-1 py-1 justify-content-between overflow-auto no-visible-scrollbar",
              containerClassName
            )}
          >
            {propTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabClick(tab)}
                className={classNames(
                  "btn btn-rounded px-4 py-3",
                  tabClassName,
                  activeTab.value === tab.value
                    ? "active-tab" // Use this class to style the active tab
                    : "inactive-tab" // Use this class to style inactive tabs
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <span
                  className={classNames(
                    "tab-button-text",
                    activeTab.value === tab.value ? "font-weight-bold" : ""
                  )}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5">
        <FadeInDiv
          activeTab={activeTab}
          tabs={propTabs}
          className={classNames("mt-5", contentClassName)}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({ className, tabs, activeTab }) => {
  return (
    <div className="position-relative dflxcardcenter">
      <AnimatePresence>
        {tabs.map((tab) =>
          activeTab.value === tab.value ? (
            <motion.div
              key={tab.value}
              layoutId={tab.value}
              className={classNames(
                "top-0 garfiwdthclass",
                className
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                zIndex: 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <div className="container">{tab.content}</div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};
