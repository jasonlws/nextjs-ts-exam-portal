import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(far, fas);

export default function FooterComponent() {
    return (
        <>
            <footer className="w-full text-center border-t border-gery p-4">
                <div>
                    Copyright <FontAwesomeIcon icon={["far", "copyright"]} />{" "}
                    2023 Jason Leung All rights reserved.
                </div>
            </footer>
        </>
    );
}
