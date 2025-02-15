import { Link } from "react-router-dom";
import WbHeader from "../components/WbHeader";
import { useServerLink } from "../context/server.context";

const Home = () => {
  const { serverLink } = useServerLink();
  return (
    <div>
      <div>
        <WbHeader />
      </div>
      <div>
        <div>
          <img src="/images/banner-4.jpg" />
        </div>
      </div>
      <div>
        <div>Page 1</div>
        <div>Page 2</div>
        <div>Page 3</div>
        <div>Page 4</div>
        <div>Page 5</div>
        <div>Page 6</div>
        <div>Page 7</div>
        <div>Page 8</div>
        <div>Page 9</div>
        <div>Page 10</div>
        <div>Page 11</div>
        <div>Page 12</div>
        <div>Page 13</div>
        <div>Page 14</div>
        <div>Page 15</div>
        <div>Page 16</div>
        <div>Page 17</div>
        <div>Page 18</div>
        <div>Page 19</div>
        <div>Page 20</div>
        <div>Page 21</div>
        <div>Page 22</div>
        <div>Page 23</div>
        <div>Page 24</div>
        <div>Page 25</div>
        <div>Page 26</div>
        <div>Page 27</div>
        <div>Page 28</div>
        <div>Page 29</div>
        <div>Page 30</div>
      </div>
      <div>
        {/* <Link to="/beyondrenewables/page-scroll">Scroll Page</Link> */}
        <Link to={`${serverLink}/page-scroll`}>Scroll Page</Link>
      </div>
    </div>
  );
};

export default Home;
