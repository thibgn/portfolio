import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TagList from './TagList.js';
import { Blurhash } from 'react-blurhash';

export default function ProjectItem({ p, photo }) {
  const img = p.properties.img_url.rich_text[0]?.plain_text;
  const name = p.properties.title.title[0]?.plain_text || '';
  const tags = p.properties.tags?.multi_select || '';
  const desc = p.properties.description.rich_text[0]?.plain_text || '';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={(e) => e.target.classList.add('top')}
      onHoverEnd={(e) => e.target.classList.remove('top')}
      transition={{ ease: 'easeIn', duration: 0.2 }}
      initial={false}
    >
      <Projet>
        <Link href={`/projets/${p.id}`} key={p.id} className='project'>
          <a>
            {img ? (
              <Image
                className='project_img'
                src={img}
                placeholder={blur}
                alt=''
                width={400}
                height={300}
              />
            ) : (
              <Blurhash
                hash={photo}
                width={400}
                height={300}
                resolutionX={32}
                resolutionY={32}
                punch={2}
              />
            )}
            <div className='project_details'>
              <span className='project_name'>{name}</span>
              <div className='project_tags'>
                <TagList tags={tags} />
              </div>
              <p className='project_desc'>{desc}</p>
            </div>
          </a>
        </Link>
      </Projet>
    </motion.div>
  );
}

const Projet = styled.div`
  > a {
    width: 100%;
    max-width: 400px;
    padding-bottom: 20px;
    transition: all 0.3s;

    & > div {
      position: relative;
    }
  }

  .project_img {
    border-radius: 3px;
  }

  .project_tags {
    position: absolute;
    bottom: 85%;
    right: 8px;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }

  .project_details {
    padding: 22px 2px 0 2px;
    align-items: baseline;
  }

  .project_name {
    line-height: 1.4em;
    font-size: 1em;
    font-weight: bold;
  }

  .project_desc {
    font-size: 0.8em;
    opacity: 0.7;
  }
`;
