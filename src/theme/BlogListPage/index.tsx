import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

type Item = Props['items'][number];

function PostCard({item}: {item: Item}): ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any = item.content;
  const meta = content.metadata;
  const fm = content.frontMatter ?? meta.frontMatter ?? {};
  const image: string | undefined = fm.image;
  const resolvedImage = useBaseUrl(image ?? '');
  const title: string = meta.title;
  const description: string = meta.description ?? fm.description ?? '';
  const permalink: string = meta.permalink;
  const date: string = meta.date;
  const tags = (meta.tags ?? []).slice(0, 3);
  const readingTime = meta.readingTime
    ? `${Math.max(1, Math.round(meta.readingTime))} min read`
    : null;

  return (
    <article className={styles.card}>
      <Link to={permalink} className={styles.cardLink} aria-label={title}>
        {image && (
          <div
            className={styles.cardImage}
            style={{backgroundImage: `url(${resolvedImage})`}}
            aria-hidden="true"
          />
        )}
        <div className={styles.cardBody}>
          <div className={styles.cardMetaTop}>
            <time dateTime={date}>{formatDate(date)}</time>
            {readingTime && <span className={styles.metaDot}>·</span>}
            {readingTime && <span>{readingTime}</span>}
          </div>
          <h2 className={styles.cardTitle}>{title}</h2>
          {description && <p className={styles.cardDesc}>{description}</p>}
          <div className={styles.cardFooter}>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map(
                  (
                    t: {label: string; permalink: string},
                  ) => (
                    <span key={t.label} className={styles.tag}>
                      {t.label}
                    </span>
                  ),
                )}
              </div>
            )}
            <span className={styles.readMore}>Read article ›</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  const {metadata, items} = props;
  const isFirstPage = metadata.page === 1;

  return (
    <Layout
      title={isFirstPage ? metadata.blogTitle : `${metadata.blogTitle} — Page ${metadata.page}`}
      description={metadata.blogDescription}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Journal</p>
        <h1 className={styles.title}>{metadata.blogTitle}</h1>
        <p className={styles.subtitle}>{metadata.blogDescription}</p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {items.map((item) => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <PostCard key={(item.content as any).metadata.permalink} item={item} />
          ))}
        </div>

        <div className={styles.paginator}>
          <BlogListPaginator metadata={metadata} />
        </div>
      </main>
    </Layout>
  );
}
