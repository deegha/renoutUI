import { fetchImages, fetchProperty } from '@/services/propertyService';
import { Navbar, ImageGallery } from '@/components';
import styles from './styles.module.scss';
import { getLocation } from '@/services/locations';

type TProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: TProps) {
  const property = await fetchProperty(params.id);
  const images = await fetchImages(params.id);

  return {
    title: property.title,
    description: property.title,
    openGraph: {
      images: images
    }
  };
}

export default async function Property({ params }: TProps) {
  const property = await fetchProperty(params.id);
  const images = await fetchImages(params.id);

  return (
    <main className={styles.container}>
      <Navbar />
      <div className={styles.innerContainer}>
        <section>
          <h1 className={styles.propertyTitle}>{property.title}</h1>
        </section>
        <section>
          <ImageGallery images={images} />
        </section>
        <section className={styles.detailSectionContainer}>
          <div className={styles.detailsLeft}>
            <div className={styles.detailSectionPoperty}>
              <h2>Property details</h2>
              <p>Location: {getLocation(property.locationId)?.name}</p>
              <p>Rent per month: {property.rentAmount}</p>
              {property.advancePayment > 0 && (
                <p>Advance: {property.advancePayment}</p>
              )}
              {property.securityDeposit > 0 && (
                <p>Security deposit: {property.securityDeposit}</p>
              )}
              <p>Furnished: {property.furnishedStatus ? 'Yes' : 'No'}</p>
              <p>Pool: {property.pool ? 'Yes' : 'No'}</p>
              <p>Gym: {property.gym ? 'Yes' : 'No'}</p>
              <p>Number of bedrooms: {property.numOfBedrooms}</p>
              <p>Number of bathrooms: {property.numOfBathrooms}</p>
              <p>Area: {property.floorArea} sqft</p>
            </div>
            {property.description && (
              <div className={styles.detailSectionSellerDesctipion}>
                <h2>Sellers Description</h2>
                <p>{property.description}</p>
              </div>
            )}
          </div>
          <div className={styles.detailsRight}>
            <div className={styles.detailSectionSeller}>
              <h2>Seller Details</h2>
              <p>Contact Person : {property.contactPerson}</p>
              <p>Contact Number :{property.contactNumber}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
