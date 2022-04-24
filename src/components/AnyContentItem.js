import withContentType from '../components/hoc/withContentType';
import withPopularity from "./hoc/withPopularity";

function AnyContentItem(props) {
    return null;
}

export default withPopularity(withContentType(AnyContentItem));
